/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "bg-fundoPrincipal",
    "bg-Carrinho",
    "bg-Gorjetas",
    "bg-Idade",
    "bg-Conselhos",
    "bg-Formulario",
    "bg-Agencia",
    "bg-Comentario",
  ],
  theme: {
    extend: {
      height: {
        "custom-height": "calc(100vh - 5rem)",
      },
      width: {
        "custom01-width": "70vh"
      },
      backgroundImage: {
        "fundoPrincipal": "url('/assets/images/fundoPrincipal.jpg')",
        "Carrinho": "url('/assets/images/lista-de-produtos-com-carrinho-weld.vercel.app_.png')",
        "Gorjetas": "url('/public/assets/images/calculadora-de-gorjetas-peach.vercel.app_.png')",
        "Idade": "url('/assets/images/calculadora-de-idade-peach.vercel.app_.png')",
        "Conselhos": "url('/assets/images/gerador-de-conselhos-six.vercel.app_.png')",
        "Formulario": "url('/assets/images/formulario-de-inscricao-com-msg-sucesso.vercel.app_.png')",
        "Agencia": "url('/assets/images/pagina-de-destino-da-agencia.vercel.app_.png')",
        "Comentario": "url('/assets/images/secao-de-grade-de-depoimentos.vercel.app_.png')"
      },
      transitionDuration: {
        "250": "0.25s"
      }
    }
    ,
    colors: {
      "transparente": "transparent ",
      "roxo": "hsl(259, 79%, 59%)",
      "branco": "hsl(0, 0%, 100%)",
      "preto": "hsl(0, 0%, 0%)",
      "cinza": "hsl(0, 0%, 91%)",
      "cinza50": "hsl(0, 0%, 91%, 50%)",
      "tecJavaScript": "hsl(53, 87%, 53%)",
      "tecHtml": "hsl(12, 73%, 51%)",
      "tecCss": "hsl(228, 73%, 51%)",
      "tecSass": "hsl(329, 50%, 60%)",
      "tecReact": "hsl(193, 86%, 66%)",
      "tecGit": "hsl(10, 80%, 55%)",
      "tecNpm": "hsl(0, 58%, 49%)",
      "tecWindows": "hsl(206, 100%, 40%)",
      "red": "red"
    },
    screens: {
      "sm": "600px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  plugins: [],
}

