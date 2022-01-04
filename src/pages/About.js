import Section from "../components/UI/Section/Section";
const About = () => {
  return (
    <Section>
      <div className="pageTitle">
        <h1>Encyclopedia of Ludic Terms</h1>
      </div>
      <div>
        <h2>About</h2>
        <p>
          The Encyclopedia of Ludic Terms is an endeavor started by the ERC
          Horizon 2020 funded project MSG - Making Sense of Games. We aim to
          establish a lexicon of terms and concepts that are frequently used in
          game studies’ discourses. Games studies is a loosely defined field
          constituted by diverse researchers with various backgrounds, but with
          the common phenomena of interest: games, play, and their surroundings.
          Especially due to the diversity of backgrounds, game studies is a
          fertile ground for academic discussion and exchange. With the high
          potential this cross-fertilization brings, comes the problem that many
          concepts and terms are derived from fields not every game studies
          scholar is familiar with. Thus, the Encyclopedia of Ludic Terms’ aim
          is to function as a first go-to research that covers the most
          prominent understandings of and discourses surrounding a term,
          offering a well-researched basis for new inquiries. The Encyclopedia
          of Ludic Terms aims to serve three main audiences:
          <br />
          <br />
          (1) Scholars within game studies who seek to explore a new topic or
          need a well founded overview over a peripheral topic/concept.
          <br />
          (2) Scholars outside of game studies who either seek to research games
          in their own field, or enter game studies from outside.
          <br />
          (3) Students of game studies, game design, media, and related fields,
          who are working on tasks related to game studies concepts.
        </p>
      </div>
      <div>
        <h2>Publishing Model</h2>
        <p>
          The Encyclopedia of Ludic Terms is openly accessible and free of
          charge. To assure quality of content and timeliness, articles in the
          Encyclopedia of Ludic Terms will be updated on an ongoing basis. Each
          update will be tracked, so that references enable (but also require)
          to refer to older versions of an article. Both authors and articles
          can be suggested to the editorial board who will then decide about the
          feasibility of the topic. Currently, the editorial team consists of
          scholars affiliated with ITU’s MSG - Making Sense of Games project.
          However, to further assure quality and diversity, the editorial team
          will invite additional scholars as one of the first steps after its
          inception.
        </p>
      </div>
    </Section>
  );
};

export default About;
