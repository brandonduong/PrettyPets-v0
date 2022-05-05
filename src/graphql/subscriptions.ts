/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      prettyPoints
      fashionTeam {
        id
        owner {
          id
          email
          prettyPoints
          fashionTeam {
            id
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            pets {
              nextToken
            }
            createdAt
            updatedAt
            fashionTeamOwnerId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              length
              jobType
              complete
              payout
              createdAt
              updatedAt
              userJobsId
            }
            nextToken
          }
          fashionFame
          rainbowDye
          starDust {
            uglyStarDust
            poorStarDust
            fineStarDust
            cuteStarDust
            prettyStarDust
          }
          createdAt
          updatedAt
          userFashionTeamId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        createdAt
        updatedAt
        fashionTeamOwnerId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          length
          jobType
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          complete
          payout
          createdAt
          updatedAt
          userJobsId
        }
        nextToken
      }
      fashionFame
      rainbowDye
      starDust {
        uglyStarDust
        poorStarDust
        fineStarDust
        cuteStarDust
        prettyStarDust
      }
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      prettyPoints
      fashionTeam {
        id
        owner {
          id
          email
          prettyPoints
          fashionTeam {
            id
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            pets {
              nextToken
            }
            createdAt
            updatedAt
            fashionTeamOwnerId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              length
              jobType
              complete
              payout
              createdAt
              updatedAt
              userJobsId
            }
            nextToken
          }
          fashionFame
          rainbowDye
          starDust {
            uglyStarDust
            poorStarDust
            fineStarDust
            cuteStarDust
            prettyStarDust
          }
          createdAt
          updatedAt
          userFashionTeamId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        createdAt
        updatedAt
        fashionTeamOwnerId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          length
          jobType
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          complete
          payout
          createdAt
          updatedAt
          userJobsId
        }
        nextToken
      }
      fashionFame
      rainbowDye
      starDust {
        uglyStarDust
        poorStarDust
        fineStarDust
        cuteStarDust
        prettyStarDust
      }
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      prettyPoints
      fashionTeam {
        id
        owner {
          id
          email
          prettyPoints
          fashionTeam {
            id
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            pets {
              nextToken
            }
            createdAt
            updatedAt
            fashionTeamOwnerId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              length
              jobType
              complete
              payout
              createdAt
              updatedAt
              userJobsId
            }
            nextToken
          }
          fashionFame
          rainbowDye
          starDust {
            uglyStarDust
            poorStarDust
            fineStarDust
            cuteStarDust
            prettyStarDust
          }
          createdAt
          updatedAt
          userFashionTeamId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        createdAt
        updatedAt
        fashionTeamOwnerId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          length
          jobType
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          complete
          payout
          createdAt
          updatedAt
          userJobsId
        }
        nextToken
      }
      fashionFame
      rainbowDye
      starDust {
        uglyStarDust
        poorStarDust
        fineStarDust
        cuteStarDust
        prettyStarDust
      }
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const onCreatePrettyPet = /* GraphQL */ `
  subscription OnCreatePrettyPet {
    onCreatePrettyPet {
      id
      animal
      nickname
      color
      colorHex
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      shiny
      traits
      star
      stats {
        cool
        cute
        confidence
        control
      }
      variant
      status
      originalOwner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      createdAt
      updatedAt
      userPetsId
      jobPetsId
      fashionTeamPetsId
      prettyPetOriginalOwnerId
    }
  }
`;
export const onUpdatePrettyPet = /* GraphQL */ `
  subscription OnUpdatePrettyPet {
    onUpdatePrettyPet {
      id
      animal
      nickname
      color
      colorHex
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      shiny
      traits
      star
      stats {
        cool
        cute
        confidence
        control
      }
      variant
      status
      originalOwner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      createdAt
      updatedAt
      userPetsId
      jobPetsId
      fashionTeamPetsId
      prettyPetOriginalOwnerId
    }
  }
`;
export const onDeletePrettyPet = /* GraphQL */ `
  subscription OnDeletePrettyPet {
    onDeletePrettyPet {
      id
      animal
      nickname
      color
      colorHex
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      shiny
      traits
      star
      stats {
        cool
        cute
        confidence
        control
      }
      variant
      status
      originalOwner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      createdAt
      updatedAt
      userPetsId
      jobPetsId
      fashionTeamPetsId
      prettyPetOriginalOwnerId
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
      id
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      length
      jobType
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      complete
      payout
      createdAt
      updatedAt
      userJobsId
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
      id
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      length
      jobType
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      complete
      payout
      createdAt
      updatedAt
      userJobsId
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
      id
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      length
      jobType
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      complete
      payout
      createdAt
      updatedAt
      userJobsId
    }
  }
`;
export const onCreateFashionTeam = /* GraphQL */ `
  subscription OnCreateFashionTeam {
    onCreateFashionTeam {
      id
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      createdAt
      updatedAt
      fashionTeamOwnerId
    }
  }
`;
export const onUpdateFashionTeam = /* GraphQL */ `
  subscription OnUpdateFashionTeam {
    onUpdateFashionTeam {
      id
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      createdAt
      updatedAt
      fashionTeamOwnerId
    }
  }
`;
export const onDeleteFashionTeam = /* GraphQL */ `
  subscription OnDeleteFashionTeam {
    onDeleteFashionTeam {
      id
      owner {
        id
        email
        prettyPoints
        fashionTeam {
          id
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          pets {
            items {
              id
              animal
              nickname
              color
              colorHex
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              jobPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          createdAt
          updatedAt
          fashionTeamOwnerId
        }
        pets {
          items {
            id
            animal
            nickname
            color
            colorHex
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            shiny
            traits
            star
            stats {
              cool
              cute
              confidence
              control
            }
            variant
            status
            originalOwner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            createdAt
            updatedAt
            userPetsId
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets {
              nextToken
            }
            length
            jobType
            owner {
              id
              email
              prettyPoints
              fashionFame
              rainbowDye
              createdAt
              updatedAt
              userFashionTeamId
            }
            complete
            payout
            createdAt
            updatedAt
            userJobsId
          }
          nextToken
        }
        fashionFame
        rainbowDye
        starDust {
          uglyStarDust
          poorStarDust
          fineStarDust
          cuteStarDust
          prettyStarDust
        }
        createdAt
        updatedAt
        userFashionTeamId
      }
      pets {
        items {
          id
          animal
          nickname
          color
          colorHex
          owner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          shiny
          traits
          star
          stats {
            cool
            cute
            confidence
            control
          }
          variant
          status
          originalOwner {
            id
            email
            prettyPoints
            fashionTeam {
              id
              createdAt
              updatedAt
              fashionTeamOwnerId
            }
            pets {
              nextToken
            }
            jobs {
              nextToken
            }
            fashionFame
            rainbowDye
            starDust {
              uglyStarDust
              poorStarDust
              fineStarDust
              cuteStarDust
              prettyStarDust
            }
            createdAt
            updatedAt
            userFashionTeamId
          }
          createdAt
          updatedAt
          userPetsId
          jobPetsId
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      createdAt
      updatedAt
      fashionTeamOwnerId
    }
  }
`;
