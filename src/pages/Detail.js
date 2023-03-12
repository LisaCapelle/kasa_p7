import React from 'react';
import { useEffect } from 'react';
import Caroussel from '../components/Caroussel';
import Collapse from '../components/Collapse';
import CollapseContent from '../components/CollapseContent';
import Hashtags from '../components/Hashtags';
import Stars from '../components/Stars';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/Detail.css';

export default function Detail({ apartmentList }) {
      const { id } = useParams();

      const navigate = useNavigate();

      useEffect(() => {
            const apartment = apartmentList.find(
                  (element) => element.id === id
            );
            if (!apartment) {
                  navigate('*');
            }
      });

      const apartment = apartmentList.find((element) => element.id === id);
      // console.log(apartment);
      if (apartment !== undefined) {
            return (
                  <main className="Detail">
                        <Caroussel pictures={apartment.pictures} />
                        <section className="Detail__info">
                              <div className="Detail__location-wrap">
                                    <div className="Detail__location">
                                          <h2 className="Detail__location__title">
                                                {apartment.title}
                                          </h2>
                                          <p className="Detail__location__city">
                                                {apartment.location}
                                          </p>
                                          <Hashtags tags={apartment.tags} />
                                    </div>
                                    <div className="Detail__evaluation">
                                          <div className="Detail__evaluation__host">
                                                <p className="host__name">
                                                      {apartment.host.name}
                                                </p>
                                                <img
                                                      className="host__avatar"
                                                      src={
                                                            apartment.host
                                                                  .picture
                                                      }
                                                      alt=""
                                                />
                                          </div>
                                          <Stars rating={apartment.rating} />
                                    </div>
                              </div>
                              <div className="Detail__content-wrap">
                                    <Collapse title="Description" page="detail">
                                          <CollapseContent
                                                content={apartment.description}
                                          />
                                    </Collapse>
                                    <Collapse title="Équipements" page="detail">
                                          <CollapseContent
                                                equipments={
                                                      apartment.equipments
                                                }
                                          />
                                    </Collapse>
                              </div>
                        </section>
                  </main>
            );
      }
}
