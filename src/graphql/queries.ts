/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPrettyPet = /* GraphQL */ `
  query GetPrettyPet($id: ID!) {
    getPrettyPet(id: $id) {
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
export const listPrettyPets = /* GraphQL */ `
  query ListPrettyPets(
    $filter: ModelPrettyPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrettyPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
        userPetsId
        jobPetsId
        fashionTeamPetsId
        prettyPetOriginalOwnerId
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        complete
        payout
        createdAt
        updatedAt
        userJobsId
      }
      nextToken
    }
  }
`;
export const getFashionTeam = /* GraphQL */ `
  query GetFashionTeam($id: ID!) {
    getFashionTeam(id: $id) {
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
export const listFashionTeams = /* GraphQL */ `
  query ListFashionTeams(
    $filter: ModelFashionTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFashionTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
