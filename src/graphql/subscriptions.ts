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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              pets
              length
              jobType
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
            color {
              name
              hex
              filter
            }
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
          color {
            name
            hex
            filter
          }
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
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              pets
              length
              jobType
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
            color {
              name
              hex
              filter
            }
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
          color {
            name
            hex
            filter
          }
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
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
              fashionTeamPetsId
              prettyPetOriginalOwnerId
            }
            nextToken
          }
          jobs {
            items {
              id
              pets
              length
              jobType
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
            color {
              name
              hex
              filter
            }
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
          color {
            name
            hex
            filter
          }
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
          fashionTeamPetsId
          prettyPetOriginalOwnerId
        }
        nextToken
      }
      jobs {
        items {
          id
          pets
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
      color {
        name
        hex
        filter
      }
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
      color {
        name
        hex
        filter
      }
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
      color {
        name
        hex
        filter
      }
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
      fashionTeamPetsId
      prettyPetOriginalOwnerId
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
      id
      pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
      pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
      pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
          color {
            name
            hex
            filter
          }
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
          color {
            name
            hex
            filter
          }
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
              shiny
              traits
              star
              variant
              status
              createdAt
              updatedAt
              userPetsId
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
            color {
              name
              hex
              filter
            }
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
            fashionTeamPetsId
            prettyPetOriginalOwnerId
          }
          nextToken
        }
        jobs {
          items {
            id
            pets
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
          color {
            name
            hex
            filter
          }
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
