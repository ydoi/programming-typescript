type UserID = string | null
type UserName = string | null

class NotLoggedInUserID extends Error {}
class NotFriendID extends Error {}
class NotUserName extends Error {}

class API {
  getLoggedInUserID(): UserID | null {
    const userID: UserID = '1'
    return userID || null
  }

  getFriendIDs(userID: UserID): UserID[] {
    // if (!userID) return new NotFriendID()
    const friendIDs :string[] = ['1', '2']
    return friendIDs
  }

  getUserName(userID: UserID): string | NotUserName {
    // if (userID)
    const userName :UserName = 'doi'
    return userName || new NotUserName()
  }
}

const api = new API()
const friendIDs = api.getFriendIDs(api.getLoggedInUserID())
const userName = friendIDs.map(id => { return api.getUserName(id) })