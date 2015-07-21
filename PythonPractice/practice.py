from sys import argv

script, username = argv

prompt = '> '

print "Hi %r, I'm the %r script." % (username, script)
print "I'd like to ask you a few questions."
print "Do you like me %r?" % username

likes = raw_input(prompt)

print "Where do you live %r?" % username
lives = raw_input(prompt)

print "What kind of computer do you have?" 
computer = raw_input(prompt)

print ''' 
All right, so you said %r about liking me.
You live in %r. Not sure where that is.
And you have a %r . Nice.
''' % (likes, lives, computer)