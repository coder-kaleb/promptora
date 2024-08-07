import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Unleash & Explore 
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Promptora is a free AI tool for today’s world, helping you find, create, and share amazing prompts.
    </p>

    <Feed />
  </section>
);

export default Home;
