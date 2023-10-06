import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[100vh]">
      {/* Hero Section */}
      <section className="section__styles flex flex-col lg:flex-row-reverse items-center gap-8 pt-[36px] md:pt-[72px] pb-[72px]">
        {/* Hero Image Container */}
        <div className="relative aspect-square w-full">
          <Image fill src="/hero-image.jpg" alt="Hero Image" />
        </div>
        {/* Header, Paragraph, and Buttons */}
        <div className="flex flex-col w-full text-start items-start gap-8">
          {/* Header */}
          <h1 className="heading text-4xl text-neutral-800">
            We help home renovation businesses get{" "}
            <span className="text-emerald-500 heading">more clients</span>
          </h1>
          {/* Paragraph and Buttons */}
          <div className="flex flex-col w-full text-start items-start gap-8 lg:gap-16">
            {/* Paragraph */}
            <p className="text-xl text-neutral-800">
              <b>Get discovered and build trust </b> with customers with a
              high-performing website especially crafted for your home
              renovation business
            </p>
            {/* Buttons */}
            <div className="flex gap-4">
              {/* Button Link */}
              <a className="cta-one rounded-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M15.9765 12.5933L15.2499 15.7432C15.1478 16.1885 14.7564 16.5 14.2979 16.5C6.41311 16.4994 0 10.0872 0 2.20322C0 1.74512 0.311561 1.35327 0.756947 1.25171L3.90724 0.525183C4.36604 0.418876 4.83483 0.656988 5.02548 1.0914L6.47936 4.48186C6.64932 4.88121 6.53468 5.3465 6.19871 5.62086L4.51605 6.97173C5.57803 9.13475 7.33694 10.8934 9.5009 11.9559L10.8785 10.2747C11.1501 9.93783 11.6189 9.82128 12.0183 9.99424L15.4093 11.4476C15.8171 11.6621 16.0828 12.1371 15.9765 12.5933Z"
                    fill="white"
                  />
                </svg>
                <span className="text-md">Get in Touch</span>
              </a>
              <a className="button-one rounded-[3px]">
                <span className="text-md">How it works</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Green BG Part */}
      <div className="bg-emerald-900 lg:hidden">
        <section className="section__styles flex flex-col lg:flex-row-reverse items-start gap-[108px] lg:gap-20 lg:py-[72px]">
          {/* Header, Divider, Paragraph */}
          <div className="flex flex-col text-start items-start relative py-[72px] w-full gap-6 max-w-[506px]">
            <h2 className="heading text-3xl text-white z-[2]">
              A{" "}
              <span className="text-emerald-300 heading">high-performing</span>{" "}
              website is the difference between a visit and a{" "}
              <span className="text-emerald-300 heading">sale</span> 💸
            </h2>
            {/* Green Border */}
            <div className="h-[2px] bg-emerald-400 w-16 rounded-full z-[2]"></div>
            <p className="text-white text-xl z-[2]">
              A high-performing website doesn&apos;t just look great, it acts
              like a 24/7 lead generation machine for your business.
            </p>
          </div>
        </section>
      </div>
      {/* High Performing Section */}
      <section className="section__styles flex flex-col lg:flex-row items-start pt-[36px] pb-[72px] relative lg:gap-12">
        {/* Side Banner */}
        <div className="hidden lg:flex bg-emerald-900 w-full p-[32px] pl-10 rounded-[16px]">
          {/* Header, Divider, Paragraph */}
          <div className="flex flex-col text-start items-start relative w-full gap-6">
            <h2 className="heading text-3xl text-white z-[2]">
              A{" "}
              <span className="text-emerald-300 heading">high-performing</span>{" "}
              website is the difference between a visit and a{" "}
              <span className="text-emerald-300 heading">sale</span> 💸
            </h2>
            {/* Green Border */}
            <div className="h-[2px] bg-emerald-400 w-16 rounded-full z-[2]"></div>
            <p className="text-white text-xl z-[2]">
              A high-performing website doesn&apos;t just look great, it acts
              like a 24/7 lead generation machine for your business.
            </p>
          </div>
        </div>
        {/* Paragraphs Container */}
        <div className="flex flex-col items-start gap-8 lg:w-full lg:max-w-[496px]">
          {/* Paragraph */}
          <div className="text-neutral-800 w-full text-lg flex flex-col gap-3 max-w-[504px]">
            <p>A high-performing website:</p>
            {/* Bullet Points */}
            <div className="flex flex-col gap-3 text-start w-full font-bold">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M23.4675 10.9884L21.8354 9.09285C21.5233 8.73294 21.2713 8.06111 21.2713 7.58123V5.54174C21.2713 4.27006 20.2273 3.22632 18.9552 3.22632H16.9151C16.447 3.22632 15.763 2.97438 15.403 2.66246L13.5069 1.03087C12.6788 0.323044 11.3227 0.323044 10.4827 1.03087L8.59852 2.67446C8.2385 2.97438 7.55445 3.22632 7.08643 3.22632H5.0103C3.73822 3.22632 2.69416 4.27006 2.69416 5.54174V7.59322C2.69416 8.06111 2.44215 8.73294 2.14213 9.09285L0.522031 11.0004C-0.17401 11.8282 -0.17401 13.1718 0.522031 13.9996L2.14213 15.9072C2.44215 16.2671 2.69416 16.9389 2.69416 17.4068V19.4583C2.69416 20.7299 3.73822 21.7737 5.0103 21.7737H7.08643C7.55445 21.7737 8.2385 22.0256 8.59852 22.3375L10.4947 23.9691C11.3227 24.677 12.6788 24.677 13.5189 23.9691L15.415 22.3375C15.775 22.0256 16.447 21.7737 16.9271 21.7737H18.9672C20.2393 21.7737 21.2833 20.7299 21.2833 19.4583V17.4188C21.2833 16.9509 21.5353 16.2671 21.8474 15.9072L23.4795 14.0116C24.1755 13.1838 24.1755 11.8162 23.4675 10.9884ZM16.9871 10.2326L11.1907 16.0271C11.0227 16.1951 10.7947 16.2911 10.5547 16.2911C10.3147 16.2911 10.0867 16.1951 9.91864 16.0271L7.01442 13.1239C6.6664 12.7759 6.6664 12.2001 7.01442 11.8522C7.36244 11.5043 7.93848 11.5043 8.2865 11.8522L10.5547 14.1196L15.715 8.96088C16.063 8.61297 16.639 8.61297 16.9871 8.96088C17.3351 9.30879 17.3351 9.88465 16.9871 10.2326Z"
                    fill="#047857"
                  />
                </svg>
                <p>Helps customers discover you</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M23.4675 10.9884L21.8354 9.09285C21.5233 8.73294 21.2713 8.06111 21.2713 7.58123V5.54174C21.2713 4.27006 20.2273 3.22632 18.9552 3.22632H16.9151C16.447 3.22632 15.763 2.97438 15.403 2.66246L13.5069 1.03087C12.6788 0.323044 11.3227 0.323044 10.4827 1.03087L8.59852 2.67446C8.2385 2.97438 7.55445 3.22632 7.08643 3.22632H5.0103C3.73822 3.22632 2.69416 4.27006 2.69416 5.54174V7.59322C2.69416 8.06111 2.44215 8.73294 2.14213 9.09285L0.522031 11.0004C-0.17401 11.8282 -0.17401 13.1718 0.522031 13.9996L2.14213 15.9072C2.44215 16.2671 2.69416 16.9389 2.69416 17.4068V19.4583C2.69416 20.7299 3.73822 21.7737 5.0103 21.7737H7.08643C7.55445 21.7737 8.2385 22.0256 8.59852 22.3375L10.4947 23.9691C11.3227 24.677 12.6788 24.677 13.5189 23.9691L15.415 22.3375C15.775 22.0256 16.447 21.7737 16.9271 21.7737H18.9672C20.2393 21.7737 21.2833 20.7299 21.2833 19.4583V17.4188C21.2833 16.9509 21.5353 16.2671 21.8474 15.9072L23.4795 14.0116C24.1755 13.1838 24.1755 11.8162 23.4675 10.9884ZM16.9871 10.2326L11.1907 16.0271C11.0227 16.1951 10.7947 16.2911 10.5547 16.2911C10.3147 16.2911 10.0867 16.1951 9.91864 16.0271L7.01442 13.1239C6.6664 12.7759 6.6664 12.2001 7.01442 11.8522C7.36244 11.5043 7.93848 11.5043 8.2865 11.8522L10.5547 14.1196L15.715 8.96088C16.063 8.61297 16.639 8.61297 16.9871 8.96088C17.3351 9.30879 17.3351 9.88465 16.9871 10.2326Z"
                    fill="#047857"
                  />
                </svg>
                <p>Builds trust with your customers</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M23.4675 10.9884L21.8354 9.09285C21.5233 8.73294 21.2713 8.06111 21.2713 7.58123V5.54174C21.2713 4.27006 20.2273 3.22632 18.9552 3.22632H16.9151C16.447 3.22632 15.763 2.97438 15.403 2.66246L13.5069 1.03087C12.6788 0.323044 11.3227 0.323044 10.4827 1.03087L8.59852 2.67446C8.2385 2.97438 7.55445 3.22632 7.08643 3.22632H5.0103C3.73822 3.22632 2.69416 4.27006 2.69416 5.54174V7.59322C2.69416 8.06111 2.44215 8.73294 2.14213 9.09285L0.522031 11.0004C-0.17401 11.8282 -0.17401 13.1718 0.522031 13.9996L2.14213 15.9072C2.44215 16.2671 2.69416 16.9389 2.69416 17.4068V19.4583C2.69416 20.7299 3.73822 21.7737 5.0103 21.7737H7.08643C7.55445 21.7737 8.2385 22.0256 8.59852 22.3375L10.4947 23.9691C11.3227 24.677 12.6788 24.677 13.5189 23.9691L15.415 22.3375C15.775 22.0256 16.447 21.7737 16.9271 21.7737H18.9672C20.2393 21.7737 21.2833 20.7299 21.2833 19.4583V17.4188C21.2833 16.9509 21.5353 16.2671 21.8474 15.9072L23.4795 14.0116C24.1755 13.1838 24.1755 11.8162 23.4675 10.9884ZM16.9871 10.2326L11.1907 16.0271C11.0227 16.1951 10.7947 16.2911 10.5547 16.2911C10.3147 16.2911 10.0867 16.1951 9.91864 16.0271L7.01442 13.1239C6.6664 12.7759 6.6664 12.2001 7.01442 11.8522C7.36244 11.5043 7.93848 11.5043 8.2865 11.8522L10.5547 14.1196L15.715 8.96088C16.063 8.61297 16.639 8.61297 16.9871 8.96088C17.3351 9.30879 17.3351 9.88465 16.9871 10.2326Z"
                    fill="#047857"
                  />
                </svg>
                <p>More leads, more sales</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M23.4675 10.9884L21.8354 9.09285C21.5233 8.73294 21.2713 8.06111 21.2713 7.58123V5.54174C21.2713 4.27006 20.2273 3.22632 18.9552 3.22632H16.9151C16.447 3.22632 15.763 2.97438 15.403 2.66246L13.5069 1.03087C12.6788 0.323044 11.3227 0.323044 10.4827 1.03087L8.59852 2.67446C8.2385 2.97438 7.55445 3.22632 7.08643 3.22632H5.0103C3.73822 3.22632 2.69416 4.27006 2.69416 5.54174V7.59322C2.69416 8.06111 2.44215 8.73294 2.14213 9.09285L0.522031 11.0004C-0.17401 11.8282 -0.17401 13.1718 0.522031 13.9996L2.14213 15.9072C2.44215 16.2671 2.69416 16.9389 2.69416 17.4068V19.4583C2.69416 20.7299 3.73822 21.7737 5.0103 21.7737H7.08643C7.55445 21.7737 8.2385 22.0256 8.59852 22.3375L10.4947 23.9691C11.3227 24.677 12.6788 24.677 13.5189 23.9691L15.415 22.3375C15.775 22.0256 16.447 21.7737 16.9271 21.7737H18.9672C20.2393 21.7737 21.2833 20.7299 21.2833 19.4583V17.4188C21.2833 16.9509 21.5353 16.2671 21.8474 15.9072L23.4795 14.0116C24.1755 13.1838 24.1755 11.8162 23.4675 10.9884ZM16.9871 10.2326L11.1907 16.0271C11.0227 16.1951 10.7947 16.2911 10.5547 16.2911C10.3147 16.2911 10.0867 16.1951 9.91864 16.0271L7.01442 13.1239C6.6664 12.7759 6.6664 12.2001 7.01442 11.8522C7.36244 11.5043 7.93848 11.5043 8.2865 11.8522L10.5547 14.1196L15.715 8.96088C16.063 8.61297 16.639 8.61297 16.9871 8.96088C17.3351 9.30879 17.3351 9.88465 16.9871 10.2326Z"
                    fill="#047857"
                  />
                </svg>
                <p>Gives you a more powerful online presence</p>
              </div>
            </div>
          </div>
          {/* Paragraph */}
          <div className="text-neutral-800 w-full text-lg flex flex-col gap-3 max-w-[504px]">
            <p>
              Your high-performing website will achieve all of this through
              intentional design towards building trust with clients.
            </p>
          </div>
          {/* Paragraph */}
          <div className="text-neutral-800 w-full text-lg flex flex-col gap-3 max-w-[504px]">
            <p>
              A well-designed, intentional website will position you as the
              expert and build a foundation of trust between you and potential
              customers.
            </p>
          </div>
          {/* Paragraph */}
          <div className="text-neutral-800 w-full text-lg flex flex-col gap-3 max-w-[504px]">
            <p>
              If you want to discover how you can stand out from the crowd and
              become represented by a high-performing, 24/7 lead generation
              machine, you are invited to contact me!
            </p>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="bg-neutral-800">
        <div className="section__styles py-[72px] flex flex-col items-start text-center text-white gap-16">
          {/* Header and line */}
          <div className="header-and-line text-center items-center">
            <h2>Understand the process</h2>
            <div></div>
          </div>
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
            {/* Grid Item */}
            <div className="w-full flex items-start">
              <div className="flex flex-col w-full items-start text-start gap-2 md:max-w-[506px] lg:max-w-none">
                <h3 className="text-xl font-bold">
                  01 <span className="text-emerald-400">|</span> Discovery call
                  📞{" "}
                </h3>
                <p className="text-lg">
                  During this phase, I get to know you and your business. Before
                  properly crafting your high-performing website, I need to
                  understand your business, it’s target audience, and it’s pain
                  points.
                </p>
              </div>
            </div>
            {/* Grid Item */}
            <div className="w-full flex md:justify-end">
              <div className="flex flex-col w-full items-start text-start gap-2 md:max-w-[506px] lg:max-w-none">
                <h3 className="text-xl font-bold">
                  02 <span className="text-emerald-400">|</span> Design phase ✍🏻
                </h3>
                <p className="text-lg">
                  During this phase, I get to know you and your business. Before
                  properly crafting your high-performing website, I need to
                  understand your business, it’s target audience, and it’s pain
                  points.
                </p>
              </div>
            </div>
            {/* Grid Item */}
            <div className="w-full flex items-start">
              <div className="flex flex-col w-full items-start text-start gap-2 md:max-w-[506px] lg:max-w-none">
                <h3 className="text-xl font-bold">
                  03 <span className="text-emerald-400">|</span> Building phase
                  👨‍💻{" "}
                </h3>
                <p className="text-lg">
                  During this phase, I get to know you and your business. Before
                  properly crafting your high-performing website, I need to
                  understand your business, it’s target audience, and it’s pain
                  points.
                </p>
              </div>
            </div>
            {/* Grid Item */}
            <div className="w-full flex md:justify-end items-start">
              <div className="flex flex-col w-full items-start text-start gap-2 md:max-w-[506px] lg:max-w-none">
                <h3 className="text-xl font-bold">
                  04 <span className="text-emerald-400">|</span> Launch phase 🚀{" "}
                </h3>
                <p className="text-lg">
                  During this phase, I get to know you and your business. Before
                  properly crafting your high-performing website, I need to
                  understand your business, it’s target audience, and it’s pain
                  points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <div className="bg-neutral-50">
        <section className="section__styles flex flex-col gap-8 py-[72px]">
          <div className="header-and-line text-center items-center text-neutral-800">
            <h2>Pricing</h2>
            <div></div>
          </div>
          {/* Pricing Options Container */}
          <div className="flex items-center justify-center w-full">
            {/* Pricing Column */}
            <div className="bg-white shadow-lg rounded-[32px] flex flex-col p-4 md:p-8 gap-12 w-full max-w-[544px]">
              {/* Pilot Program round-label and paragraph */}
              <div className="flex flex-col text-center gap-6">
                <div className="round-label w-full bg-orange-100 text-orange-600">
                  <p className="w-full">PILOT PROGRAM - Only 6 Spots Left!</p>
                </div>
                <b className="text-neutral-800">
                  We&apos;re temporarily offering our services for a discount of
                  90% to a limited number of clients
                </b>
              </div>
              {/* Price Title and texts */}
              <div className="flex flex-col items-center text-center">
                <p className="text-neutral-800">
                  Current Price per Page (Design & Development)
                </p>
                <div className="flex gap-2 items-center">
                  <span className="text-xl text-neutral-500 line-through">
                    $449
                  </span>
                  <span className="text-emerald-500 text-4xl">$44</span>
                </div>
                <p className="text-emerald-500 text-lg">
                  PILOT DISCOUNT APPLIED
                </p>
              </div>
              {/* Core Services Container */}
              <div className="flex flex-col text-start gap-6">
                {/* round-label */}
                <div className="round-label bg-neutral-800 text-white text-start">
                  Core Services
                </div>
                {/* Bullet Points */}
                <div className="text-neutral-800 flex flex-col gap-4 text-lg pl-4">
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Design of a High-performing Website
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Fast, Secure, and Reliable Website Deployment
                  </div>
                </div>
              </div>
              {/* Core Services Container */}
              <div className="flex flex-col text-start gap-6">
                {/* round-label */}
                <div className="round-label bg-emerald-700 text-white text-start">
                  Features & Bonuses
                </div>
                {/* Bullet Points */}
                <div className="text-neutral-800 flex flex-col gap-4 text-lg pl-4">
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Logo design
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Highly converting Sales Copywriting, turning
                    visitors into customers
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Funnel setup between website and your
                    preferred method of contact or payment
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Complete design system in-line with your
                    brand & business
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Guides & training on how to easily edit
                    content on your website whenever you want
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Design reviews from a fine arts expert with
                    decades of professional experience
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Daily Online Support
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>•</span> Funnel setup between website and your
                    preferred method of contact or payment
                  </div>
                </div>
              </div>
              {/* CTA Button */}
              <a
                href="#"
                className="round-label flex gap-2 items-center justify-center hover:bg-orange-400 duration-100 bg-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M15.9765 12.5933L15.2499 15.7432C15.1478 16.1885 14.7564 16.5 14.2979 16.5C6.41311 16.4994 0 10.0872 0 2.20322C0 1.74512 0.311561 1.35327 0.756947 1.25171L3.90724 0.525183C4.36604 0.418876 4.83483 0.656988 5.02548 1.0914L6.47936 4.48186C6.64932 4.88121 6.53468 5.3465 6.19871 5.62086L4.51605 6.97173C5.57803 9.13475 7.33694 10.8934 9.5009 11.9559L10.8785 10.2747C11.1501 9.93783 11.6189 9.82128 12.0183 9.99424L15.4093 11.4476C15.8171 11.6621 16.0828 12.1371 15.9765 12.5933Z"
                    fill="white"
                  />
                </svg>
                Book discovery call
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
