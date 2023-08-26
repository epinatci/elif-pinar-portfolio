import React from 'react';

const Profile = () => {


  return (
    <>

      <div className="profile">

        <div className="text-wrapper-2">Profile</div>
        <div>
          <section className="profile-box">

            <div className="text-wrapper">Profile</div>

            <article>
              <div className="element-info">
                Doğum tarihi
                <br />
                İkamet Şehri
                <br />
                Eğitim Durumu
                <br />
                <br />
                Tercih Ettiği Rol
              </div>
            </article>

            <article>
              <div className="element-answers">
                01.01.1991
                <br />
                İstanbul
                <br />
                Selçuk Ünv.&nbsp;&nbsp;İnşaat müh.
                <br />
                Lisans, 2016
                <br />
                Frontend, UI
              </div>
            </article>

          </section>


          <section className="about-box">

            <div className="text-wrapper">About Me</div>

            <p className="lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi
              mollitia.
              <br />
              <br />
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
            </p>


          </section>
        </div>
      </div>
      
    </>
  );
};

export default Profile;