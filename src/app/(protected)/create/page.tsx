'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type FormInput = {
    repoUrl: string,
    projectName: string,
    githubToken?: string,
};

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();

    function onSubmit(data: FormInput) {
        window.alert(JSON.stringify(data, null, 2));
        return true;
    };

    return (
        <div className='flex items-center gap-12 h-full justify-center'>
            <img src='/undraw.svg' alt='undraw' className='h-56 w-auto' />
            <div>
                <div>
                    <h1 className='text-2xl font-semibold'>Link your GitHub Repository</h1>
                    <p className='text-sm text-muted-foreground'>
                        Enter the URL of your repository to link it to DevSpace.
                    </p>
                </div>
                <div className="h-4"></div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register('projectName', { required: true })}
                            placeholder='Project Name'
                            required
                        />
                        <div className="h-2"></div>
                        <Input
                            {...register('repoUrl', { required: true })}
                            placeholder='Github URL'
                            type='url'
                            required
                        />
                        <div className="h-2"></div>
                        <Input
                            {...register('githubToken')}
                            placeholder='Github Token (Optional)'
                        />
                        <div className="h-4"></div>
                        <Button type='submit'>
                            Create Project
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreatePage;