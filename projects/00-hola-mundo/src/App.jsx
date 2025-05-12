import FollowCard from "./FollowCard";

export default function App() {
  let users=[
    {
      userName: 'kikobeats',
      name: 'Kiko Beats',
      imgUrl: 'https://unavatar.io/kikobeats',
      initialFollowing: true,
    },
    {
      userName: 'faberordonez1',
      name: 'Faber Ordoñez',
      imgUrl: 'https://unavatar.io/faberordonez1',
      initialFollowing: false,
    },
    {
      userName:'lidiasal',
      name: 'Lidia Sal',
      imgUrl: 'https://unavatar.io/lidia',
      initialFollowing: true,
    }   
    ]

  return (
    <div className="App">
        {users.map(({userName, name, imgUrl, initialFollowing}) => (
          <FollowCard
            key={userName}
            userName={userName}
            name={name}
            imgUrl={imgUrl}
            initialFollowing={initialFollowing}>
              {name}
          </FollowCard>
        ))}
    </div>
  );
}