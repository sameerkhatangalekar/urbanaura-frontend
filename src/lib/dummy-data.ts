import { elegance, glamour, chic ,executive, hero1, hero2, hero3, product1, product2, product3, product4, product5, product6, product7,  } from "../assets/images";

export const heroProducts = [
    {
      imageURL: hero1,
      title: "Discover Chic Styles",
      description: "Discover the latest in fashion trends at our online store. Immerse yourself in a world of chic and stylish clothing that defines your unique personality. From casual comfort to elegant sophistication, our collection has something for every occasion. Shop now and redefine your wardrobe with the hottest looks of the season. Elevate your style, embrace the trend!"
    },
    {
      imageURL: hero2,
      title:  "Revamp Your Wardrobe",
      description: "Revamp your closet with our curated collection of fashion-forward clothing. Explore a diverse range of styles that cater to your individuality. Our clothing is designed to make you feel confident and empowered. Dive into the world of possibilities and transform your everyday look. Start shopping now and unlock your wardrobe's full potential."
     },
    {
      imageURL: hero3,
      title: "Embrace Your Unique Style",
      description: "Step into a realm of fashion where confidence meets style. Our clothing line is a celebration of individuality and self-expression. Whether you're aiming for a casual day out or a glamorous evening event, we've got you covered. Explore our latest arrivals and experience the joy of dressing up. Elevate your confidence, embrace your unique fashion journey with us."
     }
  ] as const;

  export const categoriesData = [
    {
      id: 1,
      categoryName: "Chic Couture",
      imageURL: chic
    },
    {
      id: 2,
      categoryName: "Elegant Ensembles",
      imageURL: elegance
    },
    {
      id: 3,
      categoryName: "Active Glamour",
      imageURL: glamour
    },
      {
      id: 4,
      categoryName: "Cultural Charm",
      imageURL: executive
    },
  
  ] as const;


  export const popularProducts = [
    {
      id: 1,
      
      imageURL: product1
    },
    {
      id: 2,
     
      imageURL: product2
    },
    {
      id: 3,
    
      imageURL: product3
    },
      {
      id: 4,
      imageURL: product4
    },

    {
      id: 5,
      imageURL: product5,
    },
    {
      id: 6,
      imageURL: product6,
    },
    {
      id: 7,
      imageURL: product7,
   }
  
  ] as const;
  
