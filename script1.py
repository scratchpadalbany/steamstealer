import requests
import json 
key = "778CC62732B9E6FEC9E94295C4FB17C9"
testid = "76561198127152089"
test = requests.get("http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=778CC62732B9E6FEC9E94295C4FB17C9&steamid=76561198127152089&relationship=friend")
test2 = test.json()
print(test2)



Get_Player_Achievements = requests.get("http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=960090&key=778CC62732B9E6FEC9E94295C4FB17C9&steamid=76561198053794848")
print(Get_Player_Achievements)
Get_Player_Achievements_2 = Get_Player_Achievements.text
print(Get_Player_Achievements_2)
dict1 = dict(test2)
print(dict1)
with open("test.json", "w") as file:
    file.truncate(0)
    json.dump(dict1, file)