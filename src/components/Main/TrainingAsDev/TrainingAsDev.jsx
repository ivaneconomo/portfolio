const TrainingAsDev = () => {
  return (
    <section className='container space-y-4'>
      <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
        Formación como desarrollador
      </h2>
      <div className="space-y-2">
        <p className='text-gray-950 dark:text-gray-50'>
          Completé un bootcamp intensivo en desarrollo web (2022-2023).
        </p>
        <p className='text-gray-950 dark:text-gray-50'>
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
        <p className='text-gray-950 dark:text-gray-50'>
          Además, adquirí experiencia en metodologías ágiles como Scrum y
          desarrollé habilidades de trabajo en equipo.
        </p>
        <p className='text-gray-950 dark:text-gray-50'>
          Estos proyectos me permitieron aplicar de manera efectiva mis
          conocimientos y habilidades adquiridas en un entorno práctico.
        </p>
      </div>
    </section>
  );
};

export default TrainingAsDev;
