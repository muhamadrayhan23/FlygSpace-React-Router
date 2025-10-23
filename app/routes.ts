import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/index.tsx"),

  route("/about", "pages/about.tsx"),

  route("/product", "pages/product.tsx"),

  route("/event", "pages/event.tsx"),

  route("/contact", "pages/contact.tsx"),

  route("/refundpolicy", "pages/refundpolicy.tsx"),

  route("/howtoorder", "pages/howtoorder.tsx"),

  route("/faq", "pages/faq.tsx"),

  route("/payment", "pages/payment.tsx"),
]satisfies RouteConfig;
