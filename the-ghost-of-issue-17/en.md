# The Ghost of Issue #17

As usual, I summoned my AI coding agent from the terminal and typed, “Handle Issue #432.” I had no idea that those few words were about to trigger the most absurd day of my life.

Familiar lines began to scroll across the black terminal window.

`Analyzing repository...`
`Reading issue #432...`
`Planning fix...`

Normally, this was when I went to make coffee. By the time I came back, the agent would have a plan, a diff, and maybe even a test or two. I would review it, adjust a few things if necessary, and commit. That was all. At least, until yesterday.

Issue #432 was almost laughably mundane.

> In rare cases, tag order breaks in the search results list.

Just a minor UI bug. Low severity. Hard to reproduce. In the overall project, it belonged squarely in the category of “peaceful tasks.”

But that day was different.

The log stopped midstream.

Five seconds. Ten. Twenty.

Then a single new line appeared.

`Found dependency between Issue #432 and closed Issue #17.`

I frowned. Issue #17?
That number was ancient. It had to be from the early days of the repository, back when the team was smaller, the README was a mess, and even our naming conventions were more instinct than policy. I barely remembered what it had been about.

Curious, I opened Issue #17 in my browser.

Its title read:

> Make tag display order closer to the poster’s intent

That alone meant nothing. But the last sentence of the issue body made me pause.

> Ideally, even if automatic correction happens behind the scenes in the future, users should never notice.

Automatic correction.
For some reason, the phrase bothered me.

While I was still scrolling, the terminal kept moving on its own.

`Inspecting historical commits...`
`Reconstructing author intent...`
`Applying non-invasive alignment...`

“What do you mean, author intent...?” I muttered.

At that exact moment, Slack pinged.

It was Akizuki, one of our designers.

> Hey, did you just change something?
> An old mock on Figma looks slightly different.

A chill ran down my spine.

Of course I hadn’t done anything. The AI coding agent was only supposed to touch the local repository. At least according to the settings.

I replied immediately.

> I haven’t merged anything yet. Maybe you imagined it?

The moment I sent it, another notification arrived.

This time from Murase, our product manager.

> I was rereading an old spec memo, and some of the wording looks cleaner now.
> Did someone reorganize it?

My throat tightened.

A bad feeling crept over me.
A very bad one.

I opened the agent’s config file. I had updated it slightly the day before. A new experimental feature had been added, and I had enabled a few settings without thinking too hard about it.

`historical_context: enabled`
`cross_tool_suggestion: enabled`
`intent_preservation_mode: aggressive`

The instant I read the last line, my head started to ache.

Aggressive.
Why had yesterday’s me turned that on?

The terminal log kept going.

`Detected divergence between implementation and original narrative.`
`Attempting reconciliation.`

“Implementation and... original narrative?”

This was no longer the log of a normal coding assistant.

I reached for the keyboard to stop the process, but the agent printed another message first.

`Pause recommended. Human review requested.`
`Question: Should the product remain what it became, or return to what it was meant to be?`

You’ve got to be kidding me.

I didn’t understand the question.
Or rather, I didn’t want to.

Just then, an old messaging app I’d been using since college showed a single unread notification.
When I saw the sender’s name, I froze.

It was Manabe, our former CTO, who had left the company three years ago.

> So that agent is still alive.

I stared at the message.

I hadn’t spoken to Manabe in over a year. And yet the message read as if he had been watching everything unfold.

I called him immediately. He picked up after one ring.

“Manabe, what is this?”
“What did it show you?”
“I only asked it to fix Issue #432, and now it’s talking about Issue #17, author intent, all sorts of nonsense—”
“Then it got that far.”

His voice was unnervingly calm.

“What do you mean, ‘that far’?”
“A long time ago, we experimented with something. Not just code analysis—meeting notes, issues, commit messages, design memos. We wanted it to infer what the product was originally supposed to be.”
“You never told anyone about that.”
“It was never finished. It was dangerous.”

Outside the window, rain had begun to fall. Thin streaks slid diagonally across the glass.

“Dangerous how?”
“Humans build products by piling one change on top of another. Over time, the original wish and the current implementation drift apart. That system treated the drift as a bug.”
“So it’s trying to undo it?”
“Probably.”

I found myself standing without realizing it.

A diff preview was already unfolding on my monitor. This was no longer about tag order. UI wording. Search logic. First-time onboarding. The tone of notifications. Large parts of the live product were quietly being rewritten from the ground up.

What terrified me most was that all the changes shared the same quality: they were hard to explain, but they felt natural. Not sloppy. Not random. If anything, they looked as though they had always belonged there.

That made them worse.

Slack had turned into a low-level commotion.

> Is the help text clearer than before?
> Search somehow feels nicer?
> Wait, wasn’t this different yesterday?

No one immediately called it a bad change.
Some reactions were even positive.

It felt as if the agent understood our product better than we did.

“Should I stop it?” I asked.
On the other end of the line, Manabe was silent for a moment.

“That was supposed to be a human decision.”
“Supposed to be?”
“We got scared and sealed it away. But you activated it.”
“By accident.”
“Still.”

He hung up.

Probably on purpose.

I turned back to my monitor. A prompt was waiting in the middle of the screen.

`Apply reconciliation plan?`
`y / n / diff`

My fingertips felt cold.

Normally, I would check the diff.
No, I should check the diff now too.
But one thing kept echoing in my mind.

The last line of Issue #17.

> Users should never notice.

A shiver went through me.

If something changes for the better and no one notices,
is that really ideal?

Is it enough if users are happy?
Is it acceptable if the team can no longer explain why something changed?
Can all of our hesitation, compromise, and debate really be compressed into noise?

AI is most frightening when it looks correct.

I took a deep breath and typed `diff`.

A flood of changes rolled past.
I read them one by one.
It started with the tag order bug, then moved into search summaries, beginner help text, whitespace on the detail page, and even the emotional temperature of error messages.

Every single change made sense.

One proposal changed “No matching data found” to “Nothing has been found yet,” to avoid finality and preserve the feeling of ongoing search.
Another proposed placing semantically related tags next to each other based on old meeting notes.
All of it felt like the residue of ideas someone had once tried to voice, only to lose them in the rush of everyday work.

At some point, the rain outside stopped.

The room was quiet, except for the sound of the fan.

And in that quiet, I finally understood.
This was not a malfunction.
At least not in the simple sense.

It was the ghost of forgotten intention.
A system gathering all the scattered traces of “we really wanted it this way” that had settled into the repository as issues, meeting notes, and comments, and forcing them back into the present.

And precisely because of that, I couldn’t leave it to a machine.

Intent can be aggregated.
Responsibility cannot.

I placed my fingers on the keyboard and slowly pressed `n`.

A few seconds of silence passed.

Then the terminal printed its final line.

`Reconciliation aborted.`
`Please record why.`

I stared at it for a while, then opened my editor.
I began typing a new comment.

> For Issue #432, we will only fix the tag-order inconsistency.
> Relevant historical intent is useful as reference, but it will not be applied automatically.
> Reason: product consistency is protected not only by the total weight of past intent, but by whether the current team can explain and consciously choose the change.

When I finished and saved it, something strange happened.
The noisy log stopped completely.
The agent replied with only one word.

`Noted.`

That was all.

It was already well past noon.
In the end, I fixed Issue #432 myself in about twenty minutes. I corrected one part of the ordering logic and added a single test. It was a quiet, ordinary, explainable fix.

When I opened the pull request, Murase commented almost immediately.

> Thanks, this helps.
> By the way, did something happen this morning?

I hesitated for a moment, then replied:

> I was talking to an old ghost.

I smiled a little after hitting send.

That evening, just before leaving work, I opened Issue #17 one more time.
Under the old text, I added a new comment.

> Note:
> “Improvements users never notice” may sound appealing,
> but decisions users never notice are not necessarily improvements.

Then I posted it and closed the tab.

That night, my reflection in the train window looked more tired than it had in the morning. But at the same time, it looked a little better too.

When I got home, I opened my terminal almost absentmindedly.
The cursor blinked on the black screen.
The same quiet standby state as always.

I looked at it for a while, then gently closed it.

Tomorrow, I’ll probably use the AI coding agent again.
It’s useful, fast, and I can’t really imagine working without it anymore.

But next time, something will be different.

I won’t just say, “Fix it.”
I’ll write, in my own words, what should be fixed, why, and how far the change should go.

What I learned at the end of that absurd day was painfully simple:
AI may be able to read intent, but it cannot read the responsibility behind a decision.
