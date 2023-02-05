

// JSON
const barber_list_short = [
    {
      image: "../Assets/Images/short-2.jpg",
      alt:"Fire short",
      description:
        "With the variety of types of haircuts for men, it is quite easy to feel overwhelmed when choosing your next look. So that it will not happen, we have compiled the collection of the most common men haircut types below.",
    },
    {
      image: "../Assets/Images/short-3.jpg",
      alt:"Under short",
      description:
        "Knowing what different hair types there are is vital if you want to keep your locks on top. With this info, you’ll be able to not only pull off the hairstyle that’s most flattering to your face shape and hair type but also keep it in check without great ado. Our full guide contains all you need to know on the topic.",
    },
    {
      image: "../Assets/Images/short-4.jpg",
      alt:"normal short",
      description:
        "Mid fade haircut is the answer if you don’t want your fade too low or high. It comes in different styles, leaving you wide with varieties. Do you want to switch to a mid fade haircut? This piece will inspire on the best mid short haircuts to choose from, and how you can get a stylish mid fade haircut.",
    },
    {
      image: "../Assets/Images/short-5.jpg",
      alt:"Dark short",
      description:
        "The military haircut isn’t the prerogative of the army anymore. Basically, anyone can totally pull off this neat and harsh look. You can go for the undercut with a long top or pomp or you can pick up a slicked back skin fade with a geometric part. In any case, your look will appear absolutely stunning because of the military touch the haircuts give.",
    },
    {
      image: "../Assets/Images/short-6.jpg",
      alt:"white short",
      description:
        " Mens hair problems are something nobody is immune to. Follow our guide to find out what hair issues you can face and how to fix them. If at the moment you don’t have any mens hair problems, it doesn’t mean you won’t face them ever. Thinning hair, a widow’s peak, unruly locks, to name a few, are the most common concerns that any guy on this planet can struggle with sooner or later.",
    },
    {
      image: "../Assets/Images/short-7.webp",
      alt:"Gray short",
      description:
        "Mid fade haircut is the answer if you don’t want your fade too low or high. It comes in different styles, leaving you wide with varieties. Do you want to switch to a mid fade haircut? This piece will inspire on the best mid short haircuts to choose from, and how you can get a stylish mid fade haircut.",
    },
    {
      image: "../Assets/Images/short-8.jpeg",
      alt:"wide short",
      description:
        "Short curly hairstyles for men are often misconstrued as hard to manage. Are you having trouble taming your curly hair? Do you have to fight the urge to either let it grow out of control or just shave it off? Take a step back and check out our style guide of some of the trendiest short hairstyles for men with curly hair..",
    },
    {
      image: "../Assets/Images/short-9.jpg",
      alt:"Center cut",
      description:
        "Asian hairstyles men prefer more and more over the past few years. To tell you the truth there is no wonder why since all the cuts are so stylish and sassy. That is why we invite you to browse through our compilation!",
    },
    {
      image: "../Assets/Images/short-4.jpg",
      alt:"Devil short",
      description:
        "Mid fade haircut is the answer if you don’t want your fade too low or high. It comes in different styles, leaving you wide with varieties. Do you want to switch to a mid fade haircut? This piece will inspire on the best mid short haircuts to choose from, and how you can get a stylish mid fade haircut.",
    },
    {
      image: "../Assets/Images/short-4.jpg",
      alt:"Devil short",
      description:
        "Mid fade haircut is the answer if you don’t want your fade too low or high. It comes in different styles, leaving you wide with varieties. Do you want to switch to a mid fade haircut? This piece will inspire on the best mid short haircuts to choose from, and how you can get a stylish mid fade haircut.",
    }, 
  ];

  // short hairstyles//
  
  for (let i = 0; i < barber_list_short.length; i++) {
    // <div class="font-2"></div>
    let big_div = document.createElement("div");
    big_div.setAttribute("class", "font-2");
    console.log(big_div);

    // <div class="small-pic-2"></div>
    let image_div = document.createElement("div");
    image_div.setAttribute("class", "small-pic-2");
    big_div.append(image_div);

    //     <img
    //   alt="image"
    //   src="../Assets/Images/short-2.jpg"
    //   class="small-pic-3"
    // />
    let img = document.createElement("img");
    img.setAttribute("src", barber_list_short[i]["image"]);
    img.setAttribute("alt", "image");
    img.setAttribute("class", "small-pic-3");
    image_div.append(img);

    // <div class="small-font-1">
    let text_div = document.createElement("div");
    text_div.setAttribute("class", "small-font-1");
    big_div.append(text_div);

    // <p class="small-font-2">
    let text = document.createElement("p");
    text.setAttribute("class", "small-font-2");
    text.innerText = barber_list_short[i]["description"];

    text_div.append(text);

    // <div class="all_styles">

    document.querySelector(".all_styles").append(big_div);
  }

  console.log(barber_list_short);