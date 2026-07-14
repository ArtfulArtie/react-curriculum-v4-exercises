export default function SnackList() {
  const snacks = [
    { name: 'Skittles', rank: 5 },
    { name: 'Eggnog Ice Cream', rank: 4 },
    { name: "Hershey's Peppermint Kisses", rank: 3 },
    { name: 'Fiesta Snax Chips', rank: 2 },
    { name: 'Cookies and Cream milkshake', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => {
    return a.rank - b.rank;
  });

  return (
    <div>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
        ;
      </ol>
    </div>
  );
}
