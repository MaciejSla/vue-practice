<template>
  <header
    class="flex flex-col items-center justify-around gap-4 p-8 xs:flex-row 2xl:justify-center 2xl:gap-96"
  >
    <div class="text-md flex flex-col gap-4 fill-gray-500 text-gray-500">
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <IconPhone class="size-3" />
        </div>
        +8812 345 678 912
      </div>
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <IconEnvelope class="size-3" />
        </div>
        info@yourmail.com
      </div>
    </div>
    <NuxtLink to="/" class="hidden md:inline">
      <NuxtImg src="/images/logo/01.png" alt="logo full" class="size-[90px]" />
    </NuxtLink>
    <div class="w-full border-b border-black/5 sm:hidden" />
    <div class="flex items-center gap-6 fill-gray-500">
      <span class="flex gap-2">
        <NuxtLink to="/">
          <IconFacebook class="brand-icon size-4" />
        </NuxtLink>
        <NuxtLink to="/">
          <IconXTwitter class="brand-icon size-4" />
        </NuxtLink>
        <NuxtLink to="/">
          <IconLinkedin class="brand-icon size-4" />
        </NuxtLink>
        <NuxtLink to="/">
          <IconPinterest class="brand-icon size-4" />
        </NuxtLink>
      </span>
      <div class="h-6 border-l" />
      <!-- TODO add search and shopping functionality -->
      <IconSearch class="size-4 flex-shrink-0" />
      <Sheet>
        <SheetTrigger as-child>
          <div class="cursor-pointer rounded-full border p-2">
            <IconShopping class="size-4" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div>Sheet body</div>
          <!-- <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right"> Username </Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div> -->
          <SheetFooter>
            <SheetClose as-child>
              <Button type="submit"> Save changes </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
