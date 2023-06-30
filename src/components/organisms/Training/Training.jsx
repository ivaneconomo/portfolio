const Training = () => {
  return (
    <section className='container space-y-8'>
      <h2 className='text-3xl font-semibold text-gray-950 dark:text-gray-50'>
        Formación como desarrollador
      </h2>
      <div className='space-y-2 text-xl font-light text-gray-950/70 dark:text-gray-50/70'>
        <p>Completé un bootcamp intensivo en desarrollo web (2022-2023).</p>
        <p>
          Durante el programa, participé en tres proyectos utilizando
          tecnologías como{' '}
          <span className='font-semibold text-orange-500'>HTML</span>,{' '}
          <span className='font-semibold text-blue-500'>CSS</span>,{' '}
          <span className='font-semibold text-yellow-500'>JavaScript</span> y el
          stack{' '}
          <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-green-500 bg-clip-text font-bold text-transparent'>
            MERN
          </span>
          .
        </p>
        <p>
          Estos proyectos me permitieron aplicar de manera efectiva mis
          conocimientos y habilidades adquiridas en un entorno práctico.
        </p>
        <p>
          Además, adquirí experiencia en metodologías ágiles (SCRUM) y
          desarrollé habilidades de trabajo en equipo.
        </p>
      </div>
    </section>
  );
};

export default Training;
