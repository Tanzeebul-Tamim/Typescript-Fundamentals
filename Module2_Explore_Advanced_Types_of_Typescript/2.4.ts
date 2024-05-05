{
  //* Generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type PoorSmartWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<PoorSmartWatch> = {
    name: "Tanzeebul Tamim",
    computer: {
      brand: "Asus",
      model: "x-255UR",
      releaseYear: 2014,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface RichSmartWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    brand: string;
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<RichSmartWatch, YamahaBike> = {
    name: "Mezba Persian",
    computer: {
      brand: "Apple",
      model: "x",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yamaha",
      engineCapacity: "150cc",
      model: "r15",
    },
  };
}
