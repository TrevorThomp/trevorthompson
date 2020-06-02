import ScrollReveal from "scrollreveal";

const isScrollReveal = typeof window === "undefined";
const scrollReveal = isScrollReveal ? null : ScrollReveal();

export default scrollReveal;
