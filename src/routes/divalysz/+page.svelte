<h1>Élilyen Kommunikációs Diválysz™</h1>

<p>Az Élilyen™-ek megmodják neked bármilyen alakzat felületi-gradiánsát (akár 4. dimenziósnak is) </p>

<svelte:head>
	<title>Élilyen Kommunikációs Diválysz™</title>
</svelte:head>

<form method="POST">

    <label for="name" class="name">
        Név
        <input type="text" name="name" max="32" min="0" required>
    </label>

    <label for="email" class="email">
        Email cím
        <input type="text" name="email" max="32" min="0" required>
    </label>
    
    <label for="message" class="message">
        Az Élilyen™-ek részére szánt üzenet
        <textarea name="message" rows="18" cols="40" required>Kedves Élilyen™-ek...</textarea>
    </label>

    <button type="submit" class="button">Küldés</button>

</form>


<style>

	input, textarea, button {
        transition: all .3s ease-in-out;
		background-color: #111111;
		color: #fff;
		font-size: 14px;
		outline: none;
		border: 1px dashed #a5a5a5;
		padding: 12px;
		border-radius: 12px;
	}

    button:hover {
        background-color: #55555522;
    }

    label {
        display: grid;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(3, auto);
        gap: 12px;
        grid-template-areas:
        "name email"
        "text text"
        "button button";

        & .name {
            grid-area: name;
        }

        & .button {
            grid-area: button;
        }
        & .email {
            grid-area: email;
        }
        & .message {
            grid-area: text;
        }
    

    
    }



</style>