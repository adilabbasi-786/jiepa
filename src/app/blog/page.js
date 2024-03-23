import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Эмчилгээ, үйлчилгээ
            </h5>
          </div>
          <div className="row g-5">
            <ul>
              <h3>Уламжлалт эмчилгээ</h3>
              <li>Зүү / энгийн зүү,цахилгаан зүү/</li>
              <li>Төөнүүр/утаатай, утаагүй/</li>
              <li>Хануур</li>
              <li>Шивүүр</li>
              <li>Самнуур</li>
              <li>
                Бариа  / хэсэгчилсэн бариа, халуун шар тосны бариа, сүүн бариа,
                толгойн бариа, арвайн гурилын бариа, ясны шөлтэй бариа, цэгэн
                бариа/{" "}
              </li>
              <li>Бумба / соруул бумба, галтай бумба/</li>
              <li>Зөгийн балтай татлага</li>
              <li>Хүзүүний татлага</li>
              <li>Нурууны татлага</li>
              <li>Давсан зам </li>
            </ul>
            <ul>
              <h3>Физик эмчилгээ</h3>
              <li>Жинхо </li>
              <li>Электрофорез</li>
              <li>Хөлийн массажны аппарат</li>
              <li>Цахилгаан төөнүүр</li>
              <li>Сальюкс</li>
              <li>Искра</li>
              <li>УВЧ</li>
              <li>Цахилгаан зүү</li>
              <li>Утлага</li>
              <li>Нухах аппарат</li>
              <li>Гарын аппарат </li>
            </ul>
            <ul>
              <h3>Лаборатори</h3>
              <dl>
                <li>
                  <dd>
                    Клиник хематологийн шинжилгээ: Цусны ерөнхий шинжилгээ
                  </dd>
                </li>
                <li>
                  <dd>Клиник химийн шинжилгээ: Шээсний ерөнхий шинжилгээ</dd>
                </li>
                <li>
                  <dt>Иммуннологийн шинжилгээ:</dt>
                </li>
                <dd>Элэгний вирусын маркерууд</dd>
                <dd>Хавдрын маркерууд</dd>
                <dd>Бамбай булчирхайн дааврууд</dd>
                <dd>ДОХ-ын шинжилгээ</dd>
                <dd>Үе мөчний эмгэгийн эрт үеийн оношилгоо</dd>
                <dd>Д витамин</dd>

                <li>
                  <dt>Серологийн шинжилгээ:</dt>
                </li>
                <dd>Тэмбүү илрүүлэх /RPR,TPHA/ </dd>
                <dd>Хеликобактерийн шинжилгээ </dd>

                <li>
                  <dt>Хематолог:</dt>
                </li>
                <dd>
                  2012 оноос эхлээд хематологийн бүрэн автомат анализатортай
                  болж 22 –н үзүүлэлтээр цусны дэлгэрэнгүй шинжилгээг хийж
                  байна. Клиник лабораторид хийгдэж байгаа шээсний шинжилгээ:
                  Эритроцит, лейкоцит, билирубин, уробилиноген, кетон, нитрит,
                  глюкоз, кератинин,альбумин  үзэх, шээсний хувийн жин ба
                  pH тодорхойлох зэрэг 13 үзүүлэлтээр гаргадаг.
                </dd>

                <li>
                  <dt>Биохимийн бүрэн автомат аппарат:</dt>
                </li>
                <dd>
                  Билирубин /нийт/: уураг, асат, алат,альбумин Глюкоз,
                  креатинин, мочевин, , шүлтлэг фосфатаза, амилаза, ГГТ,
                  холестерин, триглицерид, ЛДГ,амилаза,шээсний хүчил, кали,
                  натри, кальци,төмөр,магни{" "}
                </dd>
              </dl>
            </ul>
            <ul>
              <h3>Джитал рентген аппарат</h3>
            </ul>
            <ul>
              <h3>Эхо 4D, хэвлийн эхо, зүрхний эхо</h3>
            </ul>
            <ul>
              <h3>Зүрхний цахилгаан бичлэгний аппарат</h3>
            </ul>
            <ul>
              <h3>Холтер /зүрхний 24 цагийн бичлэг/</h3>
            </ul>
            <ul>
              <h3>Спирометр</h3>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
