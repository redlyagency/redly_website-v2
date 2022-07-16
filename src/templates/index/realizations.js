import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  RealizationsWrapper,
  HeaderWrapper,
  RealizationsItemsWrapper,
  RealizationItem,
  BtnWrapper,
  ContentItemWrapper,
  ThumbnailItemWrapper,
  DecoLine,
  Number,
  HeaderWrapperItemItem,
  TitleParagraph,
  CategoryParagraph,
  DateParagraph

} from "../../styles/templates/index/realizations.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import Button from "../../components/button/button"

const Realizations = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRealizacje(
        sort: {order: DESC, fields: liczbaPorzdkowaRealizacji}
      ) {
        edges {
          node {
            liczbaPorzdkowaRealizacji
            createdAt(formatString: "DD-MM-YYYY")
            nazwaKlienta
            slug
            kategoriaRealizacji
            kanaly
            uslugi
            opis {
              opis
            }
            logotypKlienta {
              url
            }
            banerProjektu {
              url
            }
            kilkaSlow {
              kilkaSlow
            }
            banerKlient {
              url
            }
            banerWstep {
              url
            }
            wyzwanie {
              wyzwanie
            }
            rozwizanie {
              rozwizanie
            }
            efekty {
              url
            }
            opinia {
              opinia
            }
            imieNazwisko
            stanowisko
            }
          }
          distinct(field: kategoriaRealizacji)
        }
      }
  `)

  return (
    <RealizationsWrapper>
      <HeaderWrapper>
        <Header
          name="Ostatnie realizacje"
          emojiBase={EmojiData.hammer}
        />
      </HeaderWrapper>
      <RealizationsItemsWrapper>
        {data.allContentfulRealizacje.edges.slice(0, 3).map(({node}) => {
          return (
            <RealizationItem key={node.id} to={'/realizacje/' + node.slug}>
              <ContentItemWrapper>
                <DecoLine />
                <Number>{node.liczbaPorzdkowaRealizacji}</Number>
                <HeaderWrapperItemItem>
                  <TitleParagraph>{node.nazwaKlienta}</TitleParagraph>
                  <CategoryParagraph>{node.kategoriaRealizacji}</CategoryParagraph>
                  <DateParagraph>{node.createdAt}</DateParagraph>
                </HeaderWrapperItemItem>
              </ContentItemWrapper>
              <ThumbnailItemWrapper
                className="hoverBg"
                background={node.banerProjektu.url}
              />
            </RealizationItem>
          )
        })}
      </RealizationsItemsWrapper>
      <BtnWrapper>
        <Button name="Zobacz więcej" to="/realizacje" />
      </BtnWrapper>
    </RealizationsWrapper>
  )
}

export default Realizations