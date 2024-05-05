<template>
    <div class="min-h-screen p-0 sm:p-12">
        <div class="mx-auto max-w-md px-6 py-12 bg-slate-900 border-0 shadow-lg sm:rounded-3xl text-white">
            <h1 class="text-2xl mb-8 text-center"><span class="font-bold">revo</span> | application form</h1>
            <Vueform>
                <TextElement name="text" label="Text" />
                <TextareaElement name="textarea" label="Textarea" />
            </Vueform>
        </div>
    </div>
</template>