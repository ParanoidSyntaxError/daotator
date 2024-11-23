"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { textGlow } from "@/lib/utils";
import { AsciiButton } from "./ascii-button";
import AsciiInput from "./ascii-input";
import AsciiTextArea from "./ascii-text-area";

interface CreateFormProps extends React.HTMLAttributes<HTMLElement> { }

const schema = z.object({
    name: z.string().min(1).max(64),
    description: z.string(),
    tokenName: z.string().min(1).max(64),
    tokenSymbol: z.string().min(1).max(64),
    maxSupply: z.number().min(1)
});

export default function CreateForm({
    ...props
}: CreateFormProps) {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            description: "",
            tokenName: "",
            tokenSymbol: "",
            maxSupply: 1_000_000
        },
    });

    function handleSubmit(values: z.infer<typeof schema>) {
        console.log(values);
    };

    return (
        <div
            {...props}
        >
            <Form
                {...form}
            >
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col items-center space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem
                                className="space-y-0"
                            >
                                <FormLabel
                                    className="text-xl"
                                    style={{
                                        ...textGlow(),
                                    }}
                                >
                                    DAO name
                                </FormLabel>
                                <FormControl
                                    className="w-full"
                                >
                                    <AsciiInput
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage
                                    className="text-[#FF0000] h-5"
                                    style={{
                                        ...textGlow("#FF0000"),
                                    }}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem
                                className="space-y-0"
                            >
                                <FormLabel
                                    className="text-xl"
                                    style={{
                                        ...textGlow(),
                                    }}
                                >
                                    DAO description
                                </FormLabel>
                                <FormControl
                                    className="w-full"
                                >
                                    <AsciiTextArea
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage
                                    className="text-[#FF0000] h-5"
                                    style={{
                                        ...textGlow("#FF0000"),
                                    }}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tokenName"
                        render={({ field }) => (
                            <FormItem
                                className="space-y-0"
                            >
                                <FormLabel
                                    className="text-xl"
                                    style={{
                                        ...textGlow(),
                                    }}
                                >
                                    Token name
                                </FormLabel>
                                <FormControl
                                    className="w-full"
                                >
                                    <AsciiInput
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage
                                    className="text-[#FF0000] h-5"
                                    style={{
                                        ...textGlow("#FF0000"),
                                    }}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tokenSymbol"
                        render={({ field }) => (
                            <FormItem
                                className="space-y-0"
                            >
                                <FormLabel
                                    className="text-xl"
                                    style={{
                                        ...textGlow(),
                                    }}
                                >
                                    Token symbol
                                </FormLabel>
                                <FormControl
                                    className="w-full"
                                >
                                    <AsciiInput
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage
                                    className="text-[#FF0000] h-5"
                                    style={{
                                        ...textGlow("#FF0000"),
                                    }}
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="maxSupply"
                        render={({ field }) => (
                            <FormItem
                                className="space-y-0"
                            >
                                <FormLabel
                                    className="text-xl"
                                    style={{
                                        ...textGlow(),
                                    }}
                                >
                                    Max supply
                                </FormLabel>
                                <FormControl
                                    className="w-full"
                                >
                                    <div>
                                        <AsciiInput
                                            defaultValue={field.value}
                                            onChange={field.onChange}
                                        />
                                        <div
                                            style={{
                                                ...textGlow(),
                                            }}
                                        >
                                            Maximum funding {field.value / 1000} ETH
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage
                                    className="text-[#FF0000] h-5"
                                    style={{
                                        ...textGlow("#FF0000"),
                                    }}
                                />
                            </FormItem>
                        )}
                    />
                    <AsciiButton
                        className="text-2xl leading-6"
                    >
                        CREATE
                    </AsciiButton>
                </form>
            </Form>
        </div>
    );
}