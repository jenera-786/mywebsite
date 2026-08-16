import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience, Education } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

const title = "Jenera Jaani Basha | Data Science Portfolio";
const description =
  "Jenera Jaani Basha – Data Science fresher skilled in Python, Machine Learning, Data Analytics, SQL, Power BI, Tableau, and data visualization.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jenera Jaani Basha",
          jobTitle: "Data Science Fresher",
          email: "mailto:jenerabasha@gmail.com",
          telephone: "+91-9994316075",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tirupur",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          sameAs: [
            "https://github.com/jenera123",
            "https://www.linkedin.com/in/jenera-j",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
