import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  ReactIcon,
  AxiosIcon,
  MongoDBIcon,
  MongooseIcon,
  NodeIcon,
  ExpressIcon,
  BootstrapIcon,
  JWTIcon,
  TailwindIcon,
  GithubIcon,
  PostmanIcon,
  SlackIcon,
  GitIcon,
} from '../../atoms/icons/icons';

const Technologies = () => {
  return (
    <div className='container space-y-8'>
      <h2 className='text-3xl font-semibold'>Herramientas y Tecnologías </h2>
      <div className='flex flex-wrap gap-4 lg:justify-between'>
        <HTMLIcon />
        <CSSIcon />
        <JavaScriptIcon />
        <ReactIcon />
        <AxiosIcon />
        <BootstrapIcon />
        <TailwindIcon />

        <MongoDBIcon />
        <MongooseIcon />
        <NodeIcon />
        <ExpressIcon />
        <JWTIcon />

        <GitIcon />
        <GithubIcon />

        <PostmanIcon />

        <SlackIcon />
      </div>
    </div>
  );
};
export default Technologies;
