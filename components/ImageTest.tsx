export default function ImageTest() {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Teste de Imagens</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Dashboard PNG:</h3>
          <img src="/img/dashboard.png" alt="Dashboard" className="w-full max-w-sm border" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Section SVG:</h3>
          <img src="/img/section-01.svg" alt="Section" className="w-full max-w-sm border" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Hero PNG:</h3>
          <img src="/img/hero-01.png" alt="Hero" className="w-full max-w-sm border" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Intro JPG:</h3>
          <img src="/img/intro.jpg" alt="Intro" className="w-full max-w-sm border" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Vídeo MP4:</h3>
        <video controls className="w-full max-w-sm">
          <source src="/img/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}