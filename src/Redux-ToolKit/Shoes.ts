export interface productType {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number,
  added: boolean
}

const initialState: productType[] = [
  {
    id: 0,
    name: "Citizen ERX-4",
    price: 1500,
    quantity: 0,
    added: false,
    img: "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 1,
    name: "Citizen MAR 270 ",
    price: 1400,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 2,
    name: "Citizen OXM Z7A",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 3,
    name: "Citizen 880 XHA",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 4,
    name: "Citizen MAR 270 ",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 5,
    name: "Citizen ERX-4",
    price: 2000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 5,
    name: "Citizen 880 XHA",
    price: 2200,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 6,
    name: "Citizen MAR 270 ",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 7,
    name: "Citizen OXM Z7A",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 8,
    name: "Citizen ERX-4",
    price: 1100,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 9,
    name: "Citizen MAR 270 ",
    price: 1900,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 10,
    name: "Citizen OXM Z7A",
    price: 1300,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 11,
    name: "Citizen 880 XHA",
    price: 1600,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 12,
    name: "Citizen ERX-4",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 13,
    name: "Citizen OXM Z7A",
    price: 1700,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 14,
    name: "Citizen 880 XHA",
    price: 2100,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 15,
    name: "Citizen MAR 270 ",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 16,
    name: "Citizen ERX-4",
    price: 900,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 17,
    name: "Citizen 880 XHA",
    price: 2700,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 18,
    name: "Citizen MAR 270 ",
    price: 3000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 19,
    name: "Citizen OXM Z7A",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 20,
    name: "Citizen ERX-4",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 21,
    name: "Citizen MAR 270 ",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 22,
    name: "Citizen OXM Z7A",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 23,
    name: "Citizen 880 XHA",
    price: 500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 24,
    name: "Citizen ERX-4",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 25,
    name: "Citizen OXM Z7A",
    price: 3200,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 26,
    name: "Citizen 880 XHA",
    price: 3300,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 27,
    name: "Citizen MAR 270 ",
    price: 3400,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 28,
    name: "Citizen ERX-4",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
  },
  {
    id: 29,
    name: "Citizen 880 XHA",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 30,
    name: "Citizen MAR 270 ",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 31,
    name: "Citizen OXM Z7A",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
  {
    id: 32,
    name: "Citizen ERX-4",
    price: 4100,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
  },
  {
    id: 33,
    name: "Citizen MAR 270 ",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
  },
  {
    id: 34,
    name: "Citizen OXM Z7A",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
  },
];

export { initialState };
