//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Arthur Osorio';
  const age = 23;
  const hobbies = [
    { id: 1, title: 'Drawing' },
    { id: 2, title: 'Coding' },
    { id: 3, title: 'Photography' },
    { id: 4, title: 'Reading' },
    { id: 5, title: 'Writing' },
    { id: 6, title: 'Learning Languages' },
    { id: 7, title: 'Crocheting' },
  ];
  return (
    <div>
      <h1>About {name}</h1>
      <p>
        My name is {name}, I am {age} and I have recently picked up coding as a
        new skill. Most of my free time is spent writing, drawing, or reading. I
        will read anything from fantasy to horror. I am also always more than
        willing to talk about different books. I speak 3 languages, English,
        Spanish, and French; and I am currently choosing my fourth language to
        learn!
      </p>
      <h2>Some of my hobbies include: </h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
