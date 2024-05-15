import { init as headers } from "./components/header.js";
import { init as main } from "./components/main.js";
import { init as card } from "./components/card.js";
(function () {
  //Saludos y bienvenida
  console.log(`--Hola 🖐, soy Carlos!

  FullStack JR Developer 👨‍💻
  
  
  3..... 2... 1... Empecemos!  les cuento un poco sobre mi!
  
  >>> VIVIR A LO BETA
  Qué me apasiona y a dónde voy?
  Me apasiona la tecnología, la inteligencia artificial, los videojuegos. 
  No me gusta quedarme quieto, hago proyectos tanto para mí como para clientes como freelancer, además, siempre digo que tenemos que estar en movimiento, y vivir en BETA, como el software, actualizarnos para añadir características y ser siempre la mejor versión -obviamente, podemos tener un update que rompa el sistema, pero bueno, en esos casos hay que actualizar rápido para corregirlo- 😅
  
  >>> Qué tecnologías he usado en mis proyectos?
  React, React Native, TypeScript, JavaScript, C#,.NET, Node.js, Tailwind, Express, Next.js, JAVA, Firebase, Supabase, API-Rest, Git.
  
  Más allá de todo, me gustaría que conectemos ⬇
  https://www.linkedin.com/in/carlos-govi-desarrollador-web/
  
  Saludos!
  
  Carlos Govi
  FullStack Developer
  
  PD: 🛑 No te vayas sin ver mi https://carlosgovi.vercel.app/`);
  ///inicializo los componentes
  headers();
  main();
  card();
})();
