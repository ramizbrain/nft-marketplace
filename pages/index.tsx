import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import DsgnAnimal1 from "public/dsgn-animal-1.png";
import DsgnAnimal2 from "public/dsgn-animal-2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Next Generation NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col text-white base-medium bg-[#2B2B2B] h-screen font-work overflow-y-auto overflow-x-hidden">
        <Navigation />
        {/* Content */}
        <div className="box">
          <div className="mt-10 mb-10">
            <HeroSection />
          </div>
          {/* Trending Collection */}
          <div className="grid gap-10">
            <div className="grid gap-4">
              <h2 className="heading-medium md:heading-large font-semibold">
                Trending Collection
              </h2>
              <p>Checkout our weekly updated trending collection.</p>
            </div>
            {/* MD: Split 2 colum */}
            <div className="flex flex-col md:flex-row gap-[30px]">
              {/* MD: Colum 1 */}
              <div className="grid gap-[20px] ">
                <div className="max-w-[600px] rounded-[20px] overflow-hidden ">
                  <Image
                    alt="dsgn animal"
                    src={DsgnAnimal1}
                    sizes="max-width: 100%"
                  />
                </div>
                {/* Split 3 column on every media query */}
                <div className="flex w-full gap-[15px] justify-between">
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                </div>
              </div>
              {/* MD: Colum 2 */}
              <div className="grid gap-[20px] ">
                <div className="max-w-[600px] rounded-[20px] overflow-hidden ">
                  <Image
                    alt="dsgn animal"
                    src={DsgnAnimal1}
                    sizes="max-width: 100%"
                  />
                </div>
                {/* Split 3 column on every media query */}
                <div className="flex w-full gap-[15px] justify-between">
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                  <div className="rounded-[20px] flex max-w-[100%] overflow-hidden">
                    <Image
                      alt="DSGN Animal"
                      src={DsgnAnimal2}
                      sizes="max-width: 100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
