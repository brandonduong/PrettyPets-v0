/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const rollPet = /* GraphQL */ `
  mutation RollPet($userId: String) {
    rollPet(userId: $userId) {
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
export const assignJob = /* GraphQL */ `
  mutation AssignJob(
    $userId: String
    $petIds: [ID]
    $length: Int
    $jobType: String
  ) {
    assignJob(
      userId: $userId
      petIds: $petIds
      length: $length
      jobType: $jobType
    ) {
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
export const finishJob = /* GraphQL */ `
  mutation FinishJob($id: ID!) {
    finishJob(id: $id) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      userFashionTeamId
    }
  }
`;
export const createPrettyPet = /* GraphQL */ `
  mutation CreatePrettyPet(
    $input: CreatePrettyPetInput!
    $condition: ModelPrettyPetConditionInput
  ) {
    createPrettyPet(input: $input, condition: $condition) {
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
export const updatePrettyPet = /* GraphQL */ `
  mutation UpdatePrettyPet(
    $input: UpdatePrettyPetInput!
    $condition: ModelPrettyPetConditionInput
  ) {
    updatePrettyPet(input: $input, condition: $condition) {
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
export const deletePrettyPet = /* GraphQL */ `
  mutation DeletePrettyPet(
    $input: DeletePrettyPetInput!
    $condition: ModelPrettyPetConditionInput
  ) {
    deletePrettyPet(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createFashionTeam = /* GraphQL */ `
  mutation CreateFashionTeam(
    $input: CreateFashionTeamInput!
    $condition: ModelFashionTeamConditionInput
  ) {
    createFashionTeam(input: $input, condition: $condition) {
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
export const updateFashionTeam = /* GraphQL */ `
  mutation UpdateFashionTeam(
    $input: UpdateFashionTeamInput!
    $condition: ModelFashionTeamConditionInput
  ) {
    updateFashionTeam(input: $input, condition: $condition) {
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
export const deleteFashionTeam = /* GraphQL */ `
  mutation DeleteFashionTeam(
    $input: DeleteFashionTeamInput!
    $condition: ModelFashionTeamConditionInput
  ) {
    deleteFashionTeam(input: $input, condition: $condition) {
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
