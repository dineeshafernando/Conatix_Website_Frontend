export default function Map() {
  return (
    <section>
      <iframe 
        title="Google Location Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9707.20278894336!2d13.384279534114413!3d52.53704005655498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851f1197344db%3A0x823f64799865f4d3!2sRheinsberger%20Str.%2076%2F77%2C%2010115%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1786035701532!5m2!1sen!2sus"
        className="w-full h-[450px] "
        allowFullScreen
        loading="lazy" 
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  )
}