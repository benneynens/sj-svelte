<script lang="ts">
    // credit: https://github.com/Maxson52/sveltekit-tailwind-responsive-navbar
    import Nav from "$lib/components/nav/Nav.svelte";
    import NavLink from "$lib/components/nav/NavLink.svelte";
    import NavLinkWithDropdown from "$lib/components/nav/NavLinkWithDropdown.svelte";
    import NavDropdownLink from "$lib/components/nav/NavDropdownLink.svelte";
  </script>


	<Nav>
        <div slot="logo">
            <a href="/" class="text-xl font-serif transition-colors">Superb Journeys</a>
        </div>
  
        <NavLink link="/about/">About</NavLink>
        
        <NavLinkWithDropdown name="Experiences">
            <NavDropdownLink link="/">Active Travellers</NavDropdownLink>
            <NavDropdownLink link="/">School & Education Groups</NavDropdownLink>
            <NavDropdownLink link="/">Luxury Private Tours</NavDropdownLink>
        </NavLinkWithDropdown>

        
        <NavLink link="/testimonials/">Testimonials</NavLink>

        <NavLink link="/contact/">Contact</NavLink>

        <div slot="right" class="hidden">
        </div>


    </Nav>