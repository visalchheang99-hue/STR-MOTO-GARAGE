export default function Location() {
  return (
    <div
      className="flex justify-end items-center p-10"
      style={{ width: '100%', height: 'calc(100vh - 80px)', minHeight: '500px' }}
    >
      <iframe
        title="STR MOTO GARAGE Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9008384466956!2d104.85584541069238!3d11.55896604422494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510048b613d1%3A0x6bf925764340069f!2sSTR_Moto_Garage!5e0!3m2!1sen!2skh!4v1784359222181!5m2!1sen!2skh"
        width="600"
        height="450"
        className="border-4 border-black rounded-xl shadow-2xl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}