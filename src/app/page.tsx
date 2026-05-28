"use client";

import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",  subsets: ["latin"],
});

const assetMap = [
  {"id":"hero-gallery-1","url":"http://img.b2bpic.net/free-photo/delicious-pizza-traditional-italian-pizza_1328-3980.jpg","alt":"delicious pizza on wooden table"},
  {"id":"hero-gallery-2","url":"http://img.b2bpic.net/free-photo/top-view-arrangement-with-pizza_23-2148574218.jpg","alt":"pizza with basil and cherry tomatoes"},
  {"id":"hero-gallery-3","url":"http://img.b2bpic.net/free-photo/top-close-view-cheesy-tomato-pizza-with-olives-sausages-inside-pan-brown-pizza-food-meal-fast-food-cheese-sausage_140725-32614.jpg","alt":"assortment of pizzas on display"},
  {"id":"hero-gallery-4","url":"http://img.b2bpic.net/free-photo/top-view-table-full-delicious-food-assortment_23-2149141340.jpg","alt":"pizza with fresh mozzarella and tomato sauce"},
  {"id":"hero-gallery-5","url":"http://img.b2bpic.net/free-photo/view-pizza-with-tomatoes-mushrooms_23-2149235616.jpg","alt":"pizza with a golden crust and fresh toppings"},
  {"id":"service-dine-in","url":"http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629584.jpg","alt":"cozy restaurant interior dining area"},
  {"id":"service-takeaway","url":"http://img.b2bpic.net/free-photo/side-view-woman-receiving-groceries_23-2149722278.jpg","alt":"pizza box hand holding takeaway"},
  {"id":"service-delivery","url":"http://img.b2bpic.net/free-photo/front-view-female-courier-mask-with-delivery-food-box-yellow-wall_179666-35007.jpg","alt":"pizza delivery scooter urban street"},
  {"id":"popular-pizza-1","url":"http://img.b2bpic.net/free-photo/delicious-pizza-pink-background_23-2148601605.jpg","alt":"pepperoni pizza classic slice"},
  {"id":"popular-pizza-2","url":"http://img.b2bpic.net/free-photo/pizza-with-tomato-slices-mozarella-herbs_114579-3769.jpg","alt":"classic cheese pizza melting mozzarella"},
  {"id":"popular-pizza-3","url":"http://img.b2bpic.net/free-photo/close-up-melted-cheese-pizza_23-2149286884.jpg","alt":"supreme pizza with many toppings"},
  {"id":"popular-pizza-4","url":"http://img.b2bpic.net/free-photo/overhead-view-delicious-fresh-italian-pizza_23-2147926040.jpg","alt":"vegetarian pizza fresh vegetables"},
  {"id":"popular-pizza-5","url":"http://img.b2bpic.net/free-photo/top-view-uncooked-pizza-pan-with-corn_23-2148361351.jpg","alt":"hawaiana pizza ham pineapple"},
  {"id":"popular-pizza-6","url":"http://img.b2bpic.net/free-photo/close-up-delicious-pizza_23-2150702817.jpg","alt":"gourmet chicken alfredo pizza"},
  {"id":"menu-pizza-1","url":"http://img.b2bpic.net/free-photo/closeup-delicious-pizza-with-sliced-sausages-melted-cheese-board-lights_181624-45725.jpg","alt":"ham and pepperoni pizza on board"},
  {"id":"menu-pizza-2","url":"http://img.b2bpic.net/free-photo/delicious-mushroom-pizza-with-cheese-marble_114579-15497.jpg","alt":"four cheese pizza gourmet"},
  {"id":"menu-pizza-3","url":"http://img.b2bpic.net/free-photo/delicious-vegan-pizza-social-post_23-2151895463.jpg","alt":"vegetable feast pizza colorful"},
  {"id":"menu-pizza-4","url":"http://img.b2bpic.net/free-photo/cheese-meat-delicious-herb-horizontal_1122-2442.jpg","alt":"bbq chicken pizza smoky flavor"},
  {"id":"menu-pizza-5","url":"http://img.b2bpic.net/free-photo/front-view-tasty-cheesy-pizza-with-black-olives-sausages-red-tomatoes-grey_140725-20884.jpg","alt":"spicy Diablo pizza chili flakes"},
  {"id":"menu-pizza-6","url":"http://img.b2bpic.net/free-photo/close-up-basil-leaf-cherry-tomato-italian-pizza-with-tablecloth-wooden-table_23-2148076204.jpg","alt":"truffle mushroom pizza elegant"},
  {"id":"avatar-1","url":"http://img.b2bpic.net/free-photo/close-up-smiley-woman-man-restaurant_23-2148899031.jpg","alt":"happy young woman smiling portrait"},
  {"id":"avatar-2","url":"http://img.b2bpic.net/free-photo/medium-shot-man-eating-indoors_23-2148972802.jpg","alt":"smiling man customer portrait"},
  {"id":"avatar-3","url":"http://img.b2bpic.net/free-photo/close-up-portrait-smiling-brunette-asian-woman-sitting-with-graphic-pen-looking-happy-drawing_1258-199033.jpg","alt":"young woman with positive expression"},
  {"id":"avatar-4","url":"http://img.b2bpic.net/free-photo/close-up-smiley-man-salon_23-2149220534.jpg","alt":"older man smiling kindly portrait"},
  {"id":"contact-location","url":"http://img.b2bpic.net/free-photo/outdoors-empty-cafe-tables-chairs-sunny-day_181624-2472.jpg","alt":"exterior of modern pizzeria restaurant"}
];

const getAssetUrl = (id) => {
  const asset = assetMap.find(item => item.id === id);
  return asset ? asset.url : `/${id}.jpg`; // Fallback to a generic path if not found, though all assets should be in the map.
};

const getAssetAlt = (id) => {
  const asset = assetMap.find(item => item.id === id);
  return asset ? asset.alt : "Image"; // Generic alt text if not found.
};

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeLargeTitles"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav" className={`${inter.variable} ${openSans.variable}`}>
        <NavbarStyleApple
          brandName="Pizzería Nueva Italia"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Nosotros", id: "about" },
            { name: "Populares", id: "popular-pizzas" },
            { name: "Menú", id: "menu" },
            { name: "Reseñas", id: "testimonials" },
            { name: "Contacto", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero" className={`${inter.variable} ${openSans.variable}`}>
        <HeroBillboardGallery
          title="Pizzería Nueva Italia"
          description="Sabor auténtico en cada rebanada"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Ver Menú", href: "#menu" },
            { text: "Ordenar ahora", href: "https://wa.me/50323182755" }
          ]}
          mediaItems={[
            { imageSrc: getAssetUrl("hero-gallery-1"), imageAlt: getAssetAlt("hero-gallery-1") },
            { imageSrc: getAssetUrl("hero-gallery-2"), imageAlt: getAssetAlt("hero-gallery-2") },
            { imageSrc: getAssetUrl("hero-gallery-3"), imageAlt: getAssetAlt("hero-gallery-3") },
            { imageSrc: getAssetUrl("hero-gallery-4"), imageAlt: getAssetAlt("hero-gallery-4") },
            { imageSrc: getAssetUrl("hero-gallery-5"), imageAlt: getAssetAlt("hero-gallery-5") }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about" className={`${inter.variable} ${openSans.variable}`}>
        <TextAbout
          title="Nuestra Pasión por la Autenticidad Italiana"
          description="En Pizzería Nueva Italia, somos un restaurante local en Lourdes dedicado a la creación de pizzas artesanales con recetas que nos distinguen. Valorados con 4.6 estrellas en más de 200 reseñas, nos enorgullece ofrecer una experiencia culinaria excepcional con la mejor relación calidad-precio. Cada pizza se elabora con ingredientes frescos y amor, trayendo el verdadero sabor de Italia a su mesa."
          useInvertedBackground={false}
        />
      </div>

      <div id="popular-pizzas" data-section="popular-pizzas" className={`${inter.variable} ${openSans.variable}`}>
        <ProductCardOne
          title="Nuestras Pizzas Más Populares"
          description="Descubre los sabores favoritos de nuestros clientes, perfectos para cualquier ocasión."
          products={[
            { id: "popular-1", name: "Pizza de Jamón y Pepperoni", price: "$9.50", imageSrc: getAssetUrl("popular-pizza-1"), imageAlt: getAssetAlt("popular-pizza-1") },
            { id: "popular-2", name: "Pizza Cuatro Quesos", price: "$10.00", imageSrc: getAssetUrl("popular-pizza-2"), imageAlt: getAssetAlt("popular-pizza-2") },
            { id: "popular-3", name: "Pizza Vegetariana Especial", price: "$8.75", imageSrc: getAssetUrl("popular-pizza-3"), imageAlt: getAssetAlt("popular-pizza-3") },
            { id: "popular-4", name: "Pizza Hawaiana Clásica", price: "$9.25", imageSrc: getAssetUrl("popular-pizza-4"), imageAlt: getAssetAlt("popular-pizza-4") },
            { id: "popular-5", name: "Pizza Suprema Americana", price: "$10.50", imageSrc: getAssetUrl("popular-pizza-5"), imageAlt: getAssetAlt("popular-pizza-5") },
            { id: "popular-6", name: "Pizza de Pollo BBQ", price: "$9.75", imageSrc: getAssetUrl("popular-pizza-6"), imageAlt: getAssetAlt("popular-pizza-6") }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services" className={`${inter.variable} ${openSans.variable}`}>
        <FeatureCardSix
          title="Nuestros Servicios para Ti"
          description="Ofrecemos varias opciones para disfrutar de tu pizza favorita, siempre con la mejor calidad y conveniencia, adaptándonos a tus necesidades."
          features={[
            { title: "Consumo en el Lugar", description: "Disfruta de nuestro ambiente cálido y acogedor en el corazón de Lourdes, perfecto para familias y amigos.", imageSrc: getAssetUrl("service-dine-in"), imageAlt: getAssetAlt("service-dine-in") },
            { title: "Para Llevar", description: "Si estás de prisa, puedes recoger tu pedido y disfrutar de la misma calidad Pizzería Nueva Italia en la comodidad de tu hogar.", imageSrc: getAssetUrl("service-takeaway"), imageAlt: getAssetAlt("service-takeaway") },
            { title: "Delivery a Domicilio", description: "Llevamos el sabor auténtico de Italia directamente a tu puerta. ¡Haz tu pedido y nosotros nos encargamos del resto!", imageSrc: getAssetUrl("service-delivery"), imageAlt: getAssetAlt("service-delivery") }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu" className={`${inter.variable} ${openSans.variable}`}>
        <ProductCardOne
          title="Explora Nuestro Menú Completo"
          description="Desde los clásicos hasta nuestras especialidades, cada pizza es una obra de arte culinaria, preparada con pasión."
          products={[
            { id: "menu-1", name: "Pizza Clásica de Jamón", price: "$8.00 - $12.00", imageSrc: getAssetUrl("menu-pizza-1"), imageAlt: getAssetAlt("menu-pizza-1") },
            { id: "menu-2", name: "Pizza Cuatro Estaciones", price: "$9.50 - $14.00", imageSrc: getAssetUrl("menu-pizza-2"), imageAlt: getAssetAlt("menu-pizza-2") },
            { id: "menu-3", name: "Pizza del Chef (Especial)", price: "$10.00 - $15.50", imageSrc: getAssetUrl("menu-pizza-3"), imageAlt: getAssetAlt("menu-pizza-3") },
            { id: "menu-4", name: "Pizza BBQ Pollo", price: "$9.00 - $13.50", imageSrc: getAssetUrl("menu-pizza-4"), imageAlt: getAssetAlt("menu-pizza-4") },
            { id: "menu-5", name: "Pizza Napolitana Tradicional", price: "$8.50 - $12.50", imageSrc: getAssetUrl("menu-pizza-5"), imageAlt: getAssetAlt("menu-pizza-5") },
            { id: "menu-6", name: "Pizza Margarita Fresca", price: "$7.50 - $11.00", imageSrc: getAssetUrl("menu-pizza-6"), imageAlt: getAssetAlt("menu-pizza-6") }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className={`${inter.variable} ${openSans.variable}`}>
        <TestimonialCardFifteen
          testimonial="¡Pizzería Nueva Italia es, sin duda, la mejor opción en Lourdes! La calidad-precio es insuperable, el sabor de la salsa especial es adictivo y el servicio al cliente es siempre amable y eficiente. ¡Una experiencia que siempre recomiendo!"
          rating={5}
          author="Nuestros Clientes Satisfechos"
          avatars={[
            { src: getAssetUrl("avatar-1"), alt: getAssetAlt("avatar-1") },
            { src: getAssetUrl("avatar-2"), alt: getAssetAlt("avatar-2") },
            { src: getAssetUrl("avatar-3"), alt: getAssetAlt("avatar-3") },
            { src: getAssetUrl("avatar-4"), alt: getAssetAlt("avatar-4") }
          ]}
          ratingAnimation="opacity"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq" className={`${inter.variable} ${openSans.variable}`}>
        <FaqSplitText
          sideTitle="Preguntas Frecuentes"
          sideDescription="Aquí respondemos a tus dudas más comunes sobre nuestras pizzas, ingredientes y servicios para que disfrutes sin preocupaciones."
          faqs={[
            { id: "faq-1", title: "¿Ofrecen opciones vegetarianas o veganas?", content: "Sí, tenemos varias opciones vegetarianas en nuestro menú y podemos adaptar algunas pizzas para hacerlas veganas bajo petición. ¡Consulta a nuestro personal!" },
            { id: "faq-2", title: "¿Cuál es su área de cobertura para delivery?", content: "Realizamos delivery en toda la zona de Lourdes y sus alrededores cercanos. Para pedidos fuera de esta área, por favor contáctenos directamente para verificar la disponibilidad." },
            { id: "faq-3", title: "¿Puedo personalizar mi pizza con ingredientes adicionales?", content: "¡Claro! Ofrecemos la opción de añadir ingredientes extra a cualquier pizza de nuestro menú. Pregunta por nuestra lista de adiciones disponibles al hacer tu pedido." }
          ]}
          faqsAnimation="slide-up"
          textPosition="left"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact" className={`${inter.variable} ${openSans.variable}`}>
        <ContactSplitForm
          title="Visítanos o Contáctanos"
          description="Estamos en PJC9+F2V, Unnamed Road, Lourdes, El Salvador. Teléfono: 2318 2755. Abrimos a las 10 a. m. cada día para servirte. ¡Esperamos verte pronto o recibir tu pedido!"
          inputs={[
            { name: "name", type: "text", placeholder: "Tu Nombre Completo", required: true },
            { name: "email", type: "email", placeholder: "Tu Correo Electrónico", required: true },
            { name: "phone", type: "tel", placeholder: "Tu Número de Teléfono", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tu Mensaje o Consulta", rows: 4, required: false }}
          buttonText="Enviar Mensaje"
          imageSrc={getAssetUrl("contact-location")}
          imageAlt={getAssetAlt("contact-location")}
          mediaAnimation="none"
          mediaPosition="right"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer" className={`${inter.variable} ${openSans.variable}`}>
        <FooterBaseCard
          logoText="Pizzería Nueva Italia"
          columns={[
            { title: "Explorar", items: [{ label: "Inicio", href: "#hero" }, { label: "Menú", href: "#menu" }, { label: "Nosotros", href: "#about" }] },
            { title: "Ayuda", items: [{ label: "Contacto", href: "#contact" }, { label: "FAQs", href: "#faq" }, { label: "Pedidos", href: "https://wa.me/50323182755" }] },
            { title: "Síguenos", items: [{ label: "Facebook", href: "#" }, { label: "Instagram", href: "#" }, { label: "TikTok", href: "#" }] }
          ]}
          copyrightText="© 2024 Pizzería Nueva Italia. Hecho con amor en cada pizza 🍕"
        />
      </div>
    </ThemeProvider>
  );
}
