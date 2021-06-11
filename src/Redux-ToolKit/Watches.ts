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
    img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    name: "Citizen MAR 270 ",
    price: 1400,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Citizen OXM Z7A",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Citizen 880 XHA",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Citizen MAR 270 ",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Citizen ERX-4",
    price: 2000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Citizen 880 XHA",
    price: 2200,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Citizen MAR 270 ",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Citizen OXM Z7A",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Citizen ERX-4",
    price: 1100,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    name: "Citizen MAR 270 ",
    price: 1900,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    name: "Citizen OXM Z7A",
    price: 1300,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    name: "Citizen 880 XHA",
    price: 1600,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    name: "Citizen ERX-4",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    name: "Citizen OXM Z7A",
    price: 1700,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    name: "Citizen 880 XHA",
    price: 2100,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    name: "Citizen MAR 270 ",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 16,
    name: "Citizen ERX-4",
    price: 900,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    name: "Citizen 880 XHA",
    price: 2700,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 18,
    name: "Citizen MAR 270 ",
    price: 3000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 19,
    name: "Citizen OXM Z7A",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 20,
    name: "Citizen ERX-4",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 21,
    name: "Citizen MAR 270 ",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 22,
    name: "Citizen OXM Z7A",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 23,
    name: "Citizen 880 XHA",
    price: 500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 24,
    name: "Citizen ERX-4",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 25,
    name: "Citizen OXM Z7A",
    price: 3200,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 26,
    name: "Citizen 880 XHA",
    price: 3300,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 27,
    name: "Citizen MAR 270 ",
    price: 3400,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 28,
    name: "Citizen ERX-4",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 29,
    name: "Citizen 880 XHA",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 30,
    name: "Citizen MAR 270 ",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 31,
    name: "Citizen OXM Z7A",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 32,
    name: "Citizen ERX-4",
    price: 4100,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 33,
    name: "Citizen MAR 270 ",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 34,
    name: "Citizen OXM Z7A",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export { initialState };
