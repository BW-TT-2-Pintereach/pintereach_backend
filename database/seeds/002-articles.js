exports.seed = function (knex) {
  const articles = [
    {
      title: "Pokemon, Defining Moment of Millenials?",
      author: "Harry Rump",
      summary: "Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard",
      image: "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png",
      category: "Culture",
      rank: 3
    },
    {
      title: "Zombies Allowed to Play Football",
      author: "Heather Little",
      summary: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro",
      image: "https://cdn1.vectorstock.com/i/1000x1000/34/30/zombie-cartoon-vector-1693430.jpg",
      category: "Sports",
      rank: 4
    },
    {
      title: "Hurricane Terry Rises to Category 5",
      author: "Gail Weathers",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://www.joblo.com/assets/images/oldsite/newsimages1/crews-wheres-money1.jpg",
      category: "Weather",
      rank: 3
    },
    {
      title: "Dolphin Kingdom Discovered!",
      author: "Mike Aile",
      summary: "Monocle ipsum dolor sit amet alluring elegant Sunspel K-pop cosy the highest quality Airbus A380 charming craftsmanship Winkreative Ettinger artisanal classic. ",
      image: "https://www.nationalgeographic.com/content/dam/news/photos/000/701/70127.jpg",
      category: "Politics",
      rank: 1
    },
    {
      title: "Pirate Republic on the Rise",
      author: "R.R. Piratzi",
      summary: "Mizzenmast Arr mutiny reef schooner Privateer belaying pin hearties galleon flogging. Bowsprit barkadeer rum Jack Ketch Sail ho sutler driver grog interloper chantey",
      image: "https://miro.medium.com/max/3840/1*fr_sAn91pKh_qTvL3ANX_Q.jpeg",
      category: "Politics",
      rank: 5
    },
    {
      title: "450th Day of No Sun",
      author: "Dr. Sara Langstrom",
      summary: "Fall asleep upside-down get scared by doggo also cucumerro , for put butt in owner's face hunt by meowing loudly at 5am next to human slave food dispenser.",
      image: "https://c.tadst.com/gfx/600x337/total-solar-eclipse.jpg?1",
      category: "Weather",
      rank: 2
    },
    {
      title: "Chemists Gather at VESPR Conference",
      author: "Priscilla Wayne",
      summary: "Globular star cluster sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Orion's sword as a patch of light hundreds of thousands invent the universe",
      image: "https://www.stitchdata.com/blog/content/images/2019/11/Conference.jpg",
      category: "Culture",
      rank: 2
    },
    {
      title: "Jaguars win Super Bowl",
      author: "Fantasy Ismyname",
      summary: "I'm baby veniam consectetur incididunt quis brunch heirloom aliqua shabby chic chartreuse kale chips ad everyday carry vice",
      image: "https://www.actionnewsjax.com/resizer/n76hLzmQmqPHMWfC2G-XoXM8Qok=/1200x675/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/OBUTCABGCJDUALU6UQOOUOWOSQ.jpg",
      category: "Sports",
      rank: 3
    },
    {
      title: "Cupcakes are Falling from the Sky",
      author: "Cloe W. Cupcakes",
      summary: "Cupcake ipsum dolor sit amet danish biscuit candy wafer. Lemon drops chupa chups chupa chups pie. ",
      image: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg",
      category: "Weather",
      rank: 4
    },
    {
      title: "New Dating App for Fitness Enthusiasts",
      author: "Josh Harold",
      summary: "Fitness degree in philosophy exploring the city exploring the city. Joking around introvert I'm a good listener whatever topic is on NPR adventures, art school listening to music exploring the city seeing as many countries as possible open-minded.",
      image: "https://d6u22qyv3ngwz.cloudfront.net/ad/Zns5/eharmony-i-love-sports-small-5.jpg",
      category: "Culture",
      rank: 2
    },
  ]

  return knex("articles").insert(articles)
}