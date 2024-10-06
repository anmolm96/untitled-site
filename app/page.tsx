import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@/components/ui/button";

type Company = {
  name: string;
  url: string;
};

// TODO: Move this to a CMS
const PORTFOLIO: Company[] = [
  { name: "Slikk", url: "https://www.slikk.club/" },
  { name: "Dorje Teas", url: "https://www.dorjeteas.com/" },
  { name: "SuperFam", url: "https://www.superfam.app/" },
  { name: "VAMA", url: "https://vama.app/" },
  { name: "Dice", url: "https://dice.tech/" },
  { name: "Tramline", url: "https://www.tramline.app/" },
  { name: "Roopya", url: "https://roopya.money/" },
  { name: "Segwise", url: "https://www.segwise.ai/" },
  { name: "Closing Theory", url: "https://closingtheory.com/" },
  { name: "CarePay", url: "https://carepay.money/" },
  { name: "Defog", url: "https://defog.ai/" },
  { name: "Integration Labs", url: "https://www.integrationlabs.co/" },
  { name: "Induced", url: "https://www.induced.ai/" },
  { name: "DPDzero", url: "https://www.dpdzero.com/" },
  { name: "Requestly", url: "https://requestly.io/" },
  {
    name: "Togai (Acq. $ZUO)",
    url: "https://www.togai.com/zuora-acquires-togai/",
  },
  {
    name: "Partykit (Acq. $NET)",
    url: "https://blog.partykit.io/posts/partykit-is-joining-cloudflare",
  },
  { name: "Spiti (Exited)", url: "https://spiti.xyz/" },
];

const Home: NextPage = () => {
  const subject = "We're building {your_company_name}";
  const body = "Hey! We would love to tell you more about what we're building.";
  const mailtoLink = `mailto:pitch@untitledventures.xyz?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="mx-auto max-w-6xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-center text-4xl font-extrabold sm:text-6xl">
              &#34;UNTITLED VENTURES&#34;
            </h1>
          </div>
          <div className="p-2">
            <div className="border-accents-1 m-auto my-8 w-full max-w-3xl rounded-md border border-black p-4">
              <div className="flex flex-col gap-8 p-8">
                <h3 className="text-2xl">
                  <span className="font-bold">UNTITLED VENTURES</span> is an
                  early-stage venture firm started by{" "}
                  <a href="https://x.com/anmolm_" className="hover:text-white">
                    Anmol
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://x.com/vedicakant"
                    className="hover:text-white"
                  >
                    Vedica
                  </a>
                  .
                </h3>
                <h3 className="text-2xl">
                  We believe start-ups have only begun to scratch the surface of
                  their potential contribution to the Indian economy -- a story
                  that is still playing out and is, as yet,{" "}
                  <span className="font-bold italic">untitled</span>.
                </h3>
                <h3 className="text-2xl">
                  We are excited to play a small role in this story and invest
                  $25k in early-stage Indian founders. If you are starting a
                  company, please reach out
                </h3>
                <div className="flex justify-center">
                  <a href={mailtoLink}>
                    <Button variant="default" size="lg" className="text-lg">
                      Pitch To Us
                    </Button>
                  </a>
                </div>
                <h3 className="text-2xl">
                  Our current portfolio includes:{" "}
                  <ul className="flex flex-col list-inside">
                    {PORTFOLIO.map((co, i) => (
                      <li className="list-disc" key={co.name}>
                        <a
                          href={co.url}
                          className="hover:text-white font-bold text-lg"
                        >
                          {co.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
