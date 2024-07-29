import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import panamburBeachImage from '../assets/panambur-beach.jpg';
import tannirbhaviBeachImage from '../assets/Tannirbhavi.jpg';
import someshwaraBeachImage from '../assets/Someshwaraa.jpg';
import kudroliTempleImage from '../assets/Kudroli.jpg';
import kadriTempleImage from '../assets/Kadri.jpg';
import mangaladeviTempleImage from '../assets/Mangaldevi.jpg';
import gadaikalluImage from '../assets/Gadaikallu.jpg';
import mountain2Image from '../assets/Narahari.jpg';
import mountain3Image from '../assets/Karinja.jpg';
import kadriHillParkImage from '../assets/Kadri_park.png';
import pilikulaParkImage from '../assets/Pilikula.jpg';
import mallImage from '../assets/Fiza.jpg';
import nisargadhamImage from '../assets/Nisargadham.jpg';
import sultanbattheryImage from '../assets/Sultan.jpg';
import chapelImage from '../assets/Aloy.jpg';
import placeholderImage from '../assets/placeholder.png';

const Destinations = ({ destinations }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleShow = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDestination(null);
  };

  const defaultDestinationSections = [
    {
      id: 1,
      title: 'Beaches',
      destinations: [
        {
          id: 1,
          name: 'Panambur Beach',
          description: 'Panambur Beach is located to the south of Mangalore port. Every year, tonnes of tourists descend on this beach to attend several carnivals which host activities and events such as boat racing, kite flying, making sand sculptures, etc, making it one of the most visited beaches in Mangalore. Although it experiences the most number of visitors, yet, it is also the cleanest beach that one can come across.',
          image: panamburBeachImage,
        },
        {
          id: 2,
          name: 'Tannirbhavi Beach',
          description: 'Tannirbhavi Beach is one of the popular beaches in the city which is quite clean. Proper seats and other facilities make the beach a frequently visited attraction, and it is crowded often on weekends and public holidays. There are lifeguards to keep an eye and rescue in case of an accident, however, visitors are advised to be careful while entering the water.',
          image: tannirbhaviBeachImage,
        },
        {
          id: 3,
          name: 'Someshwara Beach',
          description: 'Someshwara Beach is a rocky beach south of Mangalore. Due to the presence of these rocks and also because of the strong currents, the waters are not ideal for swimming. Another prominent attraction in the vicinity of the beach is the “Ottinene Hill” which is a beautiful vantage point and gives you mesmerising glimpses of the city below, the river Netravati and the big beautiful Arabian Sea.',
          image: someshwaraBeachImage,
        },
      ],
    },
    {
      id: 2,
      title: 'Religious Places',
      destinations: [
        {
          id: 5,
          name: 'Kudroli Gokarnath Temple',
          description: 'Kudroli Gokarnath Temple is a prominent Hindu temple located in Mangalore, Karnataka, India. Dedicated to Gokarnanatheshwara, a form of Lord Shiva, the temple was founded by Narayana Guru in 1912 and is managed by the Billava community. Known for its beautiful architecture and cultural significance, the temple complex features a blend of traditional and modern design elements, including grand gopurams (towering gateways) and intricate carvings.',
          image: kudroliTempleImage,
        },
        {
          id: 6,
          name: 'Kadri Manjunatha Temple',
          description: 'Kadri Manjunatha Temple is a historic temple in Mangalore in the state of Karnataka, India. The incharge and priests in the temple are Shivalli Madhva Brahmins.In front of the temple, at a height there are a number of water ponds. There is a garden surrounding the ponds. When one walks down from there in front of the temple is a huge lightpole. During karthika maasa, deepothsava is held here. There are statues of Machendranath, Gorakanath, Shringinath, Lokeshwara, Manjushri, and Buddha in the temple.',
          image: kadriTempleImage,
        },
        {
          id: 7,
          name: 'Mangaladevi Temple',
          description: 'This temple is made to honour goddess Mangaladevi, a form of goddess Durga. It was built in 9000 AD and has amazing architecture spanning over acres of land. It offers all the pilgrims a site to worship their dear goddess and honour her in their own ways. The temple is just 22 minutes away from the city.',
          image: mangaladeviTempleImage,
        },
      ],
    },
    {
      id: 3,
      title: 'Mountains',
      destinations: [
        {
          id: 15,
          name: 'Gadaikallu',
          description: 'Gadaikallu, also known as Gadaikallu Belthangady, is a small village located in the Belthangady taluk of the Dakshina Kannada district in the state of Karnataka. Situated amidst the picturesque Western Ghats, Gadaikallu is known for its natural beauty, rich cultural heritage, and historical significance.A total of 1876 steps take trekkers from the base to the summit. These steps are cut out of the granite hill. At the top stands the remains of the Jamalabad Fort and a breath-taking view of the Kudremukh range. It’s categorized as a medium-level trek. It can be quite a long trek to make sure you carry plenty of water and snacks with you.',
          image: gadaikalluImage,
        },
        {
          id: 16,
          name: 'Narahari Parvatha',
          description: 'Narahari Parvatha is located on National Highway 48, which connects Mangalore to Bangalore. It is 28 Kilometers away from Mangalore and takes about 45 minutes by drive to reach the destination. Once you reach B C road, it is 2 kilometers away from B C Road junction. Continue on the highway till you spot the temple entrance on your right hand side with words written in Kannada that say ‘Shri Narahari Parvatha Sadhashiva Devasthana’. Take the steep slope which ends at a flight of stairs which takes you all the way up to the temple.',
          image: mountain2Image,
        },
        {
          id: 17,
          name: 'Sri Karinjeshwara Temple',
          description: 'Sri Karinjeshwara Temple is Hindu Temple, a famous Lord Shiva temple located Karinja in Bantwala Taluk, Kavalamudur Village, Dakshina Kannada, Karnataka, India. This temple is situated on the peak of Karinja Hill, about 1000 feet above sea level in Kodyamale hills, Karinjeshwara.There are about 600 steps to reach this temple. This temple has two parts- one is lord Shiva is on the top of a cliff and the other is for the Goddess Parvati and Lord Ganesha in the middle of the way to the hill. There are ponds named Gadha teertha at hill bottom, Ungusta theerta at hill middle.',
          image: mountain3Image,
        },
      ],
    },
    {
      id: 4,
      title: 'Parks',
      destinations: [
        {
          id: 18,
          name: 'Kadri Hill Park',
          description: 'What makes Mangalore a city par excellence is the many parks and garden inside and outside the city limits. One such park is the Kadri Hill Park. This park provide for families to visit and spend quality time in the midst of greenery and natural atmosphere.',
          image: kadriHillParkImage,
        },
        {
          id: 19,
          name: 'Pilikula Park',
          description: 'The Pilikula Park is situated at a distance of about 11-12 kms to the north of Mangalore and is also called the Nisarga Dham. This is an integrated park too and the word Pilikula is derived from the Pilikula lake. This lake is so called because the word Pilikula means where tiger comes. It is recorded that in a time past, when the tiger population here was substantial, they actually came to drink water at this lake. This massive park spans an area of about 350 acres and is a regular favourite with tourist and the city dwellers. There are a number of attractions here which are the aquarium, the Botanical Park, and gold course.',
          image: pilikulaParkImage,
        },
        {
          id: 20,
          name: 'Nisargadham Park',
          description: 'An integration of several attractions is what the Nisarga Dham is all about. This park is massive in size and covers a number of acres. The attractions here are as varied as the list is long.',
          image: nisargadhamImage,
        },
      ],
    },
    {
      id: 5,
      title: 'Shopping Malls',
      destinations: [
        {
          id: 21,
          name: 'Fiza Mall',
          description: 'Fiza Mall is the first shopping mall in Mangalore and one of the most visited malls in the city. It is known for its vast array of shops, restaurants, and entertainment options. With its modern architecture and diverse retail offerings, Fiza Mall attracts both locals and tourists alike.',
          image: mallImage,
        },
      ],
    },
    {
      id: 6,
      title: 'Historical Places',
      destinations: [
        {
          id: 22,
          name: 'Sultan Battery',
          description: 'Sultan Battery, situated in Boloor, 4 km from Mangalore, is a watchtower constructed in black stone by Tippu Sultan to prevent English warships from entering the Gurpur River. Even though it is in ruins, it provides a panoramic view of the Arabian Sea and its surroundings, making it a popular tourist spot.',
          image: sultanbattheryImage,
        },
      ],
    },
    {
      id: 7,
      title: 'Churches and Chapels',
      destinations: [
        {
          id: 23,
          name: 'St. Aloysius Chapel',
          description: 'St. Aloysius Chapel, located in the heart of Mangalore, is a stunning example of Italian architecture. The chapel is renowned for its frescoes, paintings, and intricate details, which were created by Italian Jesuit Antonio Moscheni in 1899. The chapel is part of the St. Aloysius College campus and is a must-visit for art and history enthusiasts.',
          image: chapelImage,
        },
      ],
    },
  ];

  const combinedDestinations = defaultDestinationSections.concat(destinations);

  return (
    <Container>
      {combinedDestinations.map((section) => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <Row>
            {section.destinations.map((destination) => (
              <Col md={4} key={destination.id}>
                <Card onClick={() => handleShow(destination)}>
                  <Card.Img
                    variant="top"
                    src={destination.image || placeholderImage}
                    alt={destination.name}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDestination?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedDestination?.image || placeholderImage}
            alt={selectedDestination?.name}
            className="img-fluid mb-3"
          />
          <p>{selectedDestination?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Destinations;
