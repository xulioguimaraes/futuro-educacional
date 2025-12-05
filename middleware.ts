import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Defina estas variáveis de ambiente no seu .env.local:
// STUDIO_USERNAME=admin
// STUDIO_PASSWORD=sua_senha_secreta

export function middleware(request: NextRequest) {
  // Apenas protege a rota /studio
  if (!request.nextUrl.pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  // Se não houver credenciais configuradas, permite acesso (usa apenas auth do Sanity)
  const username = process.env.STUDIO_USERNAME;
  const password = process.env.STUDIO_PASSWORD;

  if (!username || !password) {
    return NextResponse.next();
  }

  // Verifica o header de autorização
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");

      if (user === username && pass === password) {
        return NextResponse.next();
      }
    }
  }

  // Solicita autenticação
  return new NextResponse("Acesso restrito", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Sanity Studio"',
    },
  });
}

export const config = {
  matcher: "/studio/:path*",
};


