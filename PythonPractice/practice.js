var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying)
{
    if(youHit)
    {
        console.log("Nice shot, you got him right in the chest!");
        totalDamage += damageThisRound
        if(totalDamage >= 4)
        {
            console.log("You killed the dragon. Now go save that \
            princess!")
            slaying = false;
        }
        else
        {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else if(!youHit)
    {
        console.log("Yikes, the dragon gobbled you up!");
    }
    slaying = false;
}