import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Gallery from 'react-photo-gallery';
import { Grid, Row, Col, Button  } from 'react-bootstrap';
import './Epk.css';


// const download = require('image-downloader')
//downloadable highdef photos, videos, reviews, long & short bio


export default class Epk extends Component {
    downloadPhoto = (e) => {
        e.preventDefault();
        // const options = {
        //     url: 'http://someurl.com/image.jpg',
        //     dest: '/path/to/dest'                  // Save to /path/to/dest/image.jpg
        //   }

        //   download.image(options)
        //     .then(({ filename, image }) => {
        //       console.log('File saved to', filename)
        //     })
        //     .catch((err) => {
        //       console.error(err)
        //     })
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Gallery photos={PHOTO_SET} downloadPhoto/>
                        <Button className='imageDL' href='Images/carousel3.jpg' download="oldtimehoney2">Download</Button>
                        <Button  className='imageDL' href='Images/carousel6.jpg' download="oldtimehoney1">Download</Button>
                    </Col>
                    <Col>
                    <h4>Videos</h4>
                    <ReactPlayer url='https://www.youtube.com/watch?v=L_jgAVDNSck&list=PLe8kmhXy6SYURMCILRRW57XLj_pzl3Hrh&index=3&t=0s' playing={false} />
                    <ReactPlayer url='https://www.youtube.com/watch?v=YCLbDtYMs3Y&list=PLe8kmhXy6SYURMCILRRW57XLj_pzl3Hrh&index=1' playing={false} />
                    <ReactPlayer url='https://www.youtube.com/watch?v=39Zh-dVX898&list=PLe8kmhXy6SYURMCILRRW57XLj_pzl3Hrh&index=4' playing={false} />
                    </Col>
                    <Col>
                    <h4>Bio ENG & FR</h4>
                    <p>ENG: Combining the festive styles of old time, tin pan alley, and jug band tied together with a theatrical cabaret feel, Old Time Honey formed towards the end of 2012 in the metros of Montréal.
                        Since then, the band has toured venues and festivals all over British Columbia, Alberta, and Saskatchewan, Ontario, and Quebec. Having been featured on the national TV show Belle & Bum
                        as well as recent air time on francophone CBC radio, the band has one foot lodged in the francophone music community and the other more recently in the anglophone community from playing showcases at Folk Music Ontario.

                    Old Time Honey were featured performers in Les Étoiles du Metro de Montréal four years running and were also known to perform impromptu street shows in the Old Port and Quartier de Spectacles with some circus friends,
                    but have now taken time off from busking to focus on larger shows and the recording of a new album of original works scheduled for release on October 12th, 2018. Regulars at festivals such as La Festival International du Folk Sale,
                    Shazamfest, and the Montreal Folk on the Canal Festival as well as having opened for Pokey Lafarge and opening the show at Montreal's largest show for Quebec's most important holiday,"La fete national de Quebec a Montreal" on June 24th 2014 as well as 2016,
                     the band's stage experience is varied and extensive. The band partnered with circus co-op "Cirquantique" from August until November of 2014 for the composition and production of "Bang! Bang! II" opening the band up to the wild world of circus which is now often included in their larger venue sets.
                      "Bang! Bang! II" gathered a lot of steam and was contracted to be performed October 16th & 17th 2015 in Saguenay by the production company "Les Productions Euphorie SENC" as well a performance at the historic Rialto Theatre in Montreal, with an encore performance in Saguenay the following year.
                      Having headlined the Kispiox Valley Music Festival in British Columbia for which a Travel Grant from Canada Council was received in 2014, the band headed out west once again to headline the Robson Valley Music Festival the following summer. Chosen in 2013, 2014, 2015 as one of Montreal's top ten busking bands
                      and also in 2016 & 2017 as Montreal's top five folk bands by Cult Montreal, they certainly gaining exposure in their home town as well as nationally. Catch the release of the brand new album "Love songs for sick people" at Katacombs on October 11t, 2018.</p>

                    <p>FR: Combinant les styles festifs de l'époque, de la "tin pan alley" et de "jug band" avec une touche de cabaret théâtral, Old Time Honey s'est formé vers la fin de l'année 2012 dans les métros de Montréal. Depuis lors, le groupe a visité des lieux et des festivals partout en Colombie-Britannique,
                         en Alberta et en Saskatchewan, en Ontario et au Québec. Après avoir été présenté à l'émission nationale Belle & Bum et diffusé récemment à la radio francophone de la SRC, le groupe a un pied dans la communauté musicale francophone et l'autre, plus récemment, dans la communauté anglophone grâce a des showcases au Folk Music Ontario.
                      Old Time Honey a joué quatre ans dans les étoiles du métro de Montréal et était également connu pour présenter des spectacles impromptus dans le Vieux-Port et le Quartier de Spectacles avec des amis du cirque, mais a maintenant pris congé de la tournée pour se concentrer sur les spectacles plus grands et l'enregistrement d'un nouvel album de compositions originales dont la sortie est prévue le 12 octobre, 2018.
                       Régulièrement dans des festivals tels que La Fête Internationale du Folk Sale, Shazamfest, et le Festival Folk on the Canal de Montréal, ouvert à Pokey Lafarge, le spectacle le plus important de Montréal pour les fêtes les plus importantes du Québec, «La fête nationale de Québec à Montréal», et Le 24 juin 2014 ainsi que 2016, l'expérience scénique du groupe est variée et étendue.
                       Le groupe s'est associé avec la compagnie de cirque "Cirquantique" d'août à novembre 2014 pour la composition et la production de "Bang! Bang! II" ouvrant le groupe au monde sauvage du cirque qui est maintenant souvent inclus dans leurs plus grands spectacles . "Bang! Bang! II" a rassemblé beaucoup de vapeur et a été contracté pour être interprété les 16 et 17 octobre 2015 à Saguenay par la compagnie de production
                        "Les Productions Euphorie SENC" ainsi qu'une représentation au historique Théâtre Rialto à Montréal, avec un bis performance à Saguenay l'année suivante. Ayant headline le Kispiox Valley Music Festival en Colombie-Britannique pour lequel une subvention de voyage du Conseil des arts du Canada a été reçue en 2014, le groupe s'est de nouveau dirigé vers l'ouest pour présenter le
                        Robson Valley Music Festival l'été suivant. Choisi en 2013, 2014, 2015 comme l'un des dix meilleurs groupes de musique de rue de Montréal et en 2016 et 2017 comme les cinq groupes folkloriques les plus populaires de Montréal par Cult Montréal, ils ont certainement gagné en visibilité dans leur ville natale et nationale.
                          Le nouveau album "Love songs for sick people" sort le 11 octobre à Katacombs. </p>
                          </Col>
                          <Col>
                    <h4>Press & reviews</h4>
                    <Gallery photos={PRESS_SET} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const PHOTO_SET = [
    {
        src: 'Images/carousel3.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'Images/carousel6.jpg',
        width: 3,
        height: 2
    }
];

const PRESS_SET = [
    {
        src: 'Images/oth_press1.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press2.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press3.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press4.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press5.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press6.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press7.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press8.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press9.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'Images/oth_press10.jpg',
        width: 1,
        height: 1
    }
]