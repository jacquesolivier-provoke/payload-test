import { getCachedGlobal } from '@/utilities/getGlobals'
import { Home } from '@/payload-types';

const HomePageComponent = async () => {
  const home: Home = await getCachedGlobal('home')() as Home;

  return (
    <div>
      <section className="hero">
        {/* Render hero media (image/video) */}
        {home?.hero?.media && typeof home.hero.media === 'object' && (<img src={home.hero.media.url ?? undefined} alt={home.hero.media.alt} />)}

        <h1>{home?.hero?.title}</h1>
        <p>{home?.hero.body}</p>

        <div className="ctas">
          {home?.hero?.ctas?.map((cta) => (
            <a key={cta.id} href={cta.link}>{cta.buttonText}</a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageComponent;
