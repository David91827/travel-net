// src/data.ts

export interface Tour {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
  }
  
  export const tours: Tour[] = [
    {
      id: 1,
      title: "台北城市探索",
      description: "体验台北最热门的景点，包括台北101、士林夜市等。",
      image: "https://via.placeholder.com/300x200?text=台北城市探索",
      category: "城市",
      date: "2024-10-15",
    },
    {
      id: 2,
      title: "九份老街美食之旅",
      description: "探索九份的传统美食和风景，包括阿妹茶楼和老街小吃。",
      image: "https://via.placeholder.com/300x200?text=九份老街美食之旅",
      category: "美食",
      date: "2024-10-20",
    },
    {
      id: 3,
      title: "花莲海岸线探险",
      description: "在花莲体验海岸线美景，包括清水断崖和太鲁阁国家公园。",
      image: "https://via.placeholder.com/300x200?text=花莲海岸线探险",
      category: "自然",
      date: "2024-11-05",
    },
    {
      id: 4,
      title: "台中文化之旅",
      description: "了解台中的文化和历史，包括国立自然科学博物馆和草悟道。",
      image: "https://via.placeholder.com/300x200?text=台中文化之旅",
      category: "文化",
      date: "2024-11-15",
    },
    {
      id: 5,
      title: "高雄港湾体验",
      description: "享受高雄的港湾风光，包括六合夜市和驳二艺术特区。",
      image: "https://via.placeholder.com/300x200?text=高雄港湾体验",
      category: "港湾",
      date: "2024-12-01",
    },
  ];
  