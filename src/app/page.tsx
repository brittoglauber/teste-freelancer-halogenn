import Card from "./components/Card";
import { Header } from "./components/Header";
import Panel from "./components/Panel";

export const DATA_CARD = [
  {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/ff92/e06a/1c0c5df0dc877b6b66f1b6e4d6c50f6c?Expires=1703462400&Signature=Qa~jOZtpQu-M1-JUJY6knpazcQP~x5vKfV3fv~tsR08UZVSjppkxXHy~GvwaMh8-kQ55WslCPGa61i4Fh43e2D1NcEunlSVEoa185NOsq9~ydaRr7SFyZQLw9SJQpVoKpzC5oFr-PjeW3g40kZz0EJIgjsJNzr8ZnOCq9-pe7Lx8Xp9m76ykcZJlo9Gm9WArDLoR5sJECuZB55XvOyxPttDmRSc0-siiSs~lhN0RJgXq4YXOKe3znCtt7IIcpBPwZTqyAgVVgjx-QUHbyzDKhily6lIsVWD0vmJvgtcwmnx587fCJQ~RUGdsTXjg05TgBMy6hvGpgRJxXRx9WKXjCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Produto 1',
      price: 20,
      rating: 4
  },
  {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/bb9f/f627/cf0b2f86f20ab2f6bb380c5b6df7595f?Expires=1703462400&Signature=aJX1L2nczoEJRvt5w99SbJ5VHPSOKtZqpKk3ph7tgR9V1j0fw2e5OmFcBdxjX9saEL8lGup4LyRxyPGyFAf5RCHXVTyjmIFgf0QSNpDIs3zjxpTQI0iCXouGAgeso68EVzRUQStdn3HuFI5tgHUrnHX90d6ACK2nMZONg8c1BMU~gwAsFIaBFE~8dHc-yajvylVpCTpcfBZHUJXLj4QKAadgis61yk5qqPE~uRfhZduIeCF3z1SqhvHWu9WBmkmETfqqsSnjcnF3Vx66Qzxrxa7c-JEWVmMZdz2W5dixOQYnsMc6wEmYt9u~oFA7mzHoYWgZwiPSbSm4OheoAwHCuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Produto 2',
      price: 20,
      rating: 4
  },
  {
      id: 3,
      image: 'https://s3-alpha-sig.figma.com/img/9fc7/0e6f/45f487ec1065af09b215bd83c238c89f?Expires=1703462400&Signature=RXBIWqscF8Om09z2mMcw0lDJysKuLvr7fplKZ1BjcRgosdjsOlC1bpvTGr4AuaoQwotN5X1Oj2HHYLnCCcCm~gRtd6RzeVgblkEj9XCbM~OrVLqImsO7Kw4~4WBXIEincvGOnEgeTedBSb1-NphP5RKXgKd077aTKI3P4UB9EAcq9mYWCcD7X3BEwaOosV-RUXtoiDiyrfMRmAqnwfwERN2XgWBgrWsyYQ9fi3mDhmL2FGBS31w8bWRwSxh9g~N43WNxKra6ruUexQZWDuRntPo6w8Skirp9Q38jbc8KFfU1FICHP5dwCVvV-YDJ4UQZht0G4bCUOGx9kQPd7SHjbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Produto 3',
      price: 20,
      rating: 4
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <Panel />
      <Card produtos={DATA_CARD} />
    </>
  )
}
