import React from 'react';

const About = () => {
  return (
    <section className="about-section" style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem' }}>About Genki Grub</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.2rem' }}>
        Welcome to <strong>Genki Grub</strong>, your ultimate guide to exploring the art and science of cooking. Our platform bridges technology and gastronomy, offering personalized tools to transform your culinary journey. From discovering unique flavor pairings to creating customized recipes tailored to your dietary preferences, Genki Grub empowers you to cook with confidence and creativity.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.2rem' }}>
        Built on cutting-edge research, we leverage <strong>RecipeDB</strong> and <strong>FlavorDB</strong>—innovative APIs developed by <strong>IIIT Delhi's CoSy Lab</strong>. These powerful databases enable us to bring you accurate, rich insights into ingredients, recipes, and global cuisines.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.2rem' }}>
        Whether you're an experienced chef or a curious home cook, our intuitive features—like smart pantry integration, eco-friendly recipes, and a flavor-centric ingredient encyclopedia—make every meal an adventure. Dive into a world of global flavors, uncover the stories behind iconic pairings, and unlock endless possibilities in your kitchen.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
        <strong>Genki Grub</strong> isn't just about cooking; it's about connecting with food in meaningful and innovative ways.
      </p>
    </section>
  );
};

export default About;
